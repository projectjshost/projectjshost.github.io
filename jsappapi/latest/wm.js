import $ from 'https://esm.sh/jquery';
import BackdropRefraction from './blur.js';

const syncDesktopClasses = () => {
	document.body.classList.toggle("trafficLightCaptionButtons", localStorage.trafficLightCaptionButtons === "true");
	document.body.classList.toggle("reverseTitlebar", localStorage.reverseTitlebar === "true");
};

syncDesktopClasses();

window.addEventListener("storage", (e) => {
	if (e.key === "trafficLightCaptionButtons" || e.key === "reverseTitlebar") {
		syncDesktopClasses();
	}
	if (e.key === "blurType" || e.key === "blurRadius" || e.key === "uiTransparency" || e.key === "opacity") {
		document.querySelectorAll('.window[id]').forEach(win => {
			applyBlurToWindow(win.id);
		});
	}
});

const cleanupWindowBlur = (winId) => {
	if (refractionInstances.has(winId)) {
		const instance = refractionInstances.get(winId);
		instance.destroy();
		refractionInstances.delete(winId);
	}
};

const applyBlurToWindow = (winId) => {
	const blurType = localStorage.blurType || 'native';
	const uiTransparency = localStorage.uiTransparency === 'true';

	cleanupWindowBlur(winId);

	if (!uiTransparency || blurType !== 'custom') {
		return;
	}

	const el = document.getElementById(winId);
	if (!el) return;

	const blurRadius = parseFloat(localStorage.blurRadius) || 20;
	const opacity = parseFloat(localStorage.opacity) || 50;

	const blurAmt = (blurRadius / 20) * 3;
	const strength = (blurRadius / 20) * 150;
	const rgbFringing = (opacity / 100) * 0.5;

	const instance = new BackdropRefraction(`#${winId}`, {
		strength,
		edgeSize: 150,
		falloff: 6.0,
		rgbFringing,
		blurAmt
	});
	refractionInstances.set(winId, instance);
};

let baseZIndex = 1000;
let bottomZIndex = 100;
let topZIndex = 10000;

let windowCounter = 0;
const refractionInstances = new Map();

export const openAppWindow = (target, params, properties = {}) => {
	const {
		x = 50,
		y = 50,
		width = 400,
		height = 600,
		canClose = true,
		canResize = true,
		canMinimize = true,
		canMove = true,
		maximized = false,
		minimized = false,
		alwaysOnTop = false,
		alwaysOnBottom = false
	} = properties;

	if (typeof params === "object" && params !== null) {
		target = `${target}?${new URLSearchParams(params).toString()}`;
	}

	const resizersHtml = canResize ? `
		<div class="resizer n" data-dir="n"></div><div class="resizer e" data-dir="e"></div>
		<div class="resizer s" data-dir="s"></div><div class="resizer w" data-dir="w"></div>
		<div class="resizer ne" data-dir="ne"></div><div class="resizer nw" data-dir="nw"></div>
		<div class="resizer se" data-dir="se"></div><div class="resizer sw" data-dir="sw"></div>
	` : '';

	const minimizeButtonHtml = canMinimize ? `<button class="minimizeButton"><span class="icon">keyboard_arrow_down</span></button>` : '';
	const maximizeButtonHtml = canResize ? `<button class="maximizeButton"><span class="icon">keyboard_arrow_up</span></button>` : '';
	const closeButtonHtml = canClose ? `<button class="closeButton"><span class="icon">close_small</span></button>` : '';

	let initialZIndex;
	if (alwaysOnTop) {
		initialZIndex = ++topZIndex;
	} else if (alwaysOnBottom) {
		initialZIndex = ++bottomZIndex;
	} else {
		initialZIndex = ++baseZIndex;
	}

	const windowId = `window-${++windowCounter}`;

	const windowHtml = `
        <div class="window" id="${windowId}" style="top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px; z-index: ${initialZIndex};">
            ${resizersHtml}
            
            <div class="titlebar">
                <span class="title">${target}</span>
                <div class="captionButtons">
                    ${minimizeButtonHtml}
                    ${maximizeButtonHtml}
                    ${closeButtonHtml}
                </div>
            </div>
            <iframe class="windowbody" src="/${target}"></iframe>
        </div>
    `;

	const $win = $(windowHtml);
	const $iframe = $win.find('iframe');

	const updateZIndex = () => {
		if (alwaysOnTop) {
			$win.css('z-index', ++topZIndex);
		} else if (alwaysOnBottom) {
			$win.css('z-index', ++bottomZIndex);
		} else {
			$win.css('z-index', ++baseZIndex);
		}
	};

	$win.on('mousedown', updateZIndex);

	$iframe.on('load', function () {
		try {
			const iframeWindow = this.contentWindow;
			if (iframeWindow) {
				iframeWindow.addEventListener('mousedown', () => {
					$win.trigger('mousedown');
				}, true);
			}
		} catch (err) {
			console.warn("Unable to bind focus event to iframe:", err);
		}
	});

	$win.find('.closeButton').on('click', () => {
		cleanupWindowBlur(windowId);
		$win.remove();
	});

	$win.find('.minimizeButton').on('click', () => {
		$win.toggleClass('minimized');
		$win.removeClass('maximized');
	});

	let preMaxState = {
		top: `${y}px`,
		left: `${x}px`,
		width: `${width}px`,
		height: `${height}px`
	};

	$win.find('.maximizeButton').on('click', () => {
		if ($win.hasClass('maximized')) {
			$win.removeClass('maximized');
			$win.css(preMaxState);
		} else {
			preMaxState = {
				top: $win.css('top'), left: $win.css('left'),
				width: $win.css('width'), height: $win.css('height')
			};
			$win.removeClass('minimized').addClass('maximized').removeAttr('style');
			updateZIndex();
		}
	});

	if (maximized) {
		$win.addClass('maximized');
		$win.css({ top: '', left: '', width: '', height: '' });
	} else if (minimized) {
		$win.addClass('minimized');
	}

	if (canMove) {
		$win.find('.titlebar').on('mousedown', function (e) {
			if ($win.hasClass('maximized') || $(e.target).closest('.captionButtons').length) return;

			let startX = e.clientX, startY = e.clientY;
			let startTop = parseInt($win.css('top'), 10) || 0;
			let startLeft = parseInt($win.css('left'), 10) || 0;

			$('.windowbody').css('pointer-events', 'none');

			const onMouseMove = (moveEvent) => {
				$win.css({
					top: startTop + (moveEvent.clientY - startY),
					left: startLeft + (moveEvent.clientX - startX)
				});
			};

			const onMouseUp = () => {
				$(document).off('mousemove', onMouseMove).off('mouseup', onMouseUp);
				$('.windowbody').css('pointer-events', '');
			};

			$(document).on('mousemove', onMouseMove).on('mouseup', onMouseUp);
		});
	} else {
		$win.find('.titlebar').css('cursor', 'default');
	}

	$win.find('.resizer').on('mousedown', function (e) {
		e.preventDefault();
		if ($win.hasClass('maximized') || $win.hasClass('minimized')) return;

		const dir = $(this).data('dir');
		let startX = e.clientX, startY = e.clientY;
		let startTop = parseInt($win.css('top'), 10);
		let startLeft = parseInt($win.css('left'), 10);
		let startWidth = $win.width();
		let startHeight = $win.height();

		$('.windowbody').css('pointer-events', 'none');

		const onMouseMove = (moveEvent) => {
			let dx = moveEvent.clientX - startX;
			let dy = moveEvent.clientY - startY;

			let newWidth = Math.max(200, startWidth + (dir.includes('w') ? -dx : dx));
			let newHeight = Math.max(200, startHeight + (dir.includes('n') ? -dy : dy));

			if (dir.includes('e')) $win.css('width', newWidth);
			if (dir.includes('s')) $win.css('height', newHeight);
			if (dir.includes('w') && newWidth > 200) {
				$win.css({ left: startLeft + dx, width: newWidth });
			}
			if (dir.includes('n') && newHeight > 200) {
				$win.css({ top: startTop + dy, height: newHeight });
			}
		};

		const onMouseUp = () => {
			$(document).off('mousemove', onMouseMove).off('mouseup', onMouseUp);
			$('.windowbody').css('pointer-events', '');
		};

		$(document).on('mousemove', onMouseMove).on('mouseup', onMouseUp);
	});

	$("body").append($win);
	applyBlurToWindow(windowId);
};