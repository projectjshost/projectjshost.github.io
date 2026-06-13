import $ from 'https://esm.sh/jquery';

let windowZIndex = 100;

export const openAppWindow = (target, params) => {
	if (typeof params === "object") {
		target = `${target}?${new URLSearchParams(params).toString()}`;
	}
	const windowHtml = `
        <div class="window" style="top: 50px; left: 50px; width: 400px; height: 600px; z-index: ${++windowZIndex};">
            <div class="resizer n" data-dir="n"></div><div class="resizer e" data-dir="e"></div>
            <div class="resizer s" data-dir="s"></div><div class="resizer w" data-dir="w"></div>
            <div class="resizer ne" data-dir="ne"></div><div class="resizer nw" data-dir="nw"></div>
            <div class="resizer se" data-dir="se"></div><div class="resizer sw" data-dir="sw"></div>
            
            <div class="titlebar">
                <span class="title">${target}</span>
                <div class="captionButtons">
                    <button class="minimizeButton"><span class="icon">keyboard_arrow_down</span></button>
                    <button class="maximizeButton"><span class="icon">keyboard_arrow_up</span></button>
                    <button class="closeButton"><span class="icon">close_small</span></button>
                </div>
            </div>
            <iframe class="windowbody" src="/${target}"></iframe>
        </div>
    `;

	const $win = $(windowHtml);
	const $iframe = $win.find('iframe');

	$win.on('mousedown', () => {
		$win.css('z-index', ++windowZIndex);
	});

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

	$win.find('.closeButton').on('click', () => $win.remove());

	$win.find('.minimizeButton').on('click', () => {
		$win.toggleClass('minimized');
		$win.removeClass('maximized');
	});

	let preMaxState = {};
	$win.find('.maximizeButton').on('click', () => {
		if ($win.hasClass('maximized')) {
			$win.removeClass('maximized');
			$win.css(preMaxState);
		} else {
			preMaxState = {
				top: $win.css('top'), left: $win.css('left'),
				width: $win.css('width'), height: $win.css('height')
			};
			$win.removeClass('minimized').addClass('maximized').removeAttr('style').css('z-index', ++windowZIndex);
		}
	});

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
};