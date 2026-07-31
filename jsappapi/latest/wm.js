import $ from 'https://esm.sh/jquery';
import BackdropRefraction from './blur.js';

/**
 * State object representing a window's current UI status.
 * @typedef {Object} WindowState
 * @property {string} title - The current title of the window.
 * @property {boolean} minimized - Whether the window is minimized.
 * @property {boolean} maximized - Whether the window is maximized.
 * @property {boolean} focused - Whether the window is currently focused.
 */

/**
 * Window state extended with its unique identifier.
 * @typedef {WindowState & { id: string }} WindowInfo
 */

/**
 * Callback function invoked when window states are updated.
 * @callback WindowChangeCallback
 * @param {WindowInfo[]} windows - List of all current window states.
 */

/**
 * Configuration options for creating a new window.
 * @typedef {Object} WindowProperties
 * @property {number} [x=50] - Initial X coordinate (left) in pixels.
 * @property {number} [y=50] - Initial Y coordinate (top) in pixels.
 * @property {number} [width=400] - Initial width in pixels.
 * @property {number} [height=600] - Initial height in pixels.
 * @property {boolean} [canClose=true] - Whether the window can be closed.
 * @property {boolean} [canResize=true] - Whether the window can be resized.
 * @property {boolean} [canMinimize=true] - Whether the window can be minimized.
 * @property {boolean} [canMove=true] - Whether the window can be dragged.
 * @property {boolean} [maximized=false] - Whether the window starts in a maximized state.
 * @property {boolean} [minimized=false] - Whether the window starts in a minimized state.
 * @property {boolean} [alwaysOnTop=false] - Whether to keep the window always on top.
 * @property {boolean} [alwaysOnBottom=false] - Whether to keep the window always on bottom.
 */

/**
 * Synchronizes body CSS classes based on preferences stored in `localStorage`.
 * @returns {void}
 */
const syncDesktopClasses = () => {
	document.body.classList.toggle("trafficLightCaptionButtons", localStorage.trafficLightCaptionButtons === "true");
	document.body.classList.toggle("reverseTitlebar", localStorage.reverseTitlebar === "true");
};

syncDesktopClasses();

/**
 * Global message listener for iframe cross-origin requests (e.g. updating window titles).
 */
window.addEventListener("message", (e) => {
	if (e.data?.type === 'setAppName' && typeof e.data.name === 'string') {
		// Find the iframe that sent this message and update its parent window's titlebar
		const iframe = Array.from(document.querySelectorAll('iframe.windowbody')).find(
			f => /** @type {HTMLIFrameElement} */ (f).contentWindow === e.source
		);
		if (iframe) {
			const win = iframe.closest('.window');
			if (win) {
				const titleEl = win.querySelector('.titlebar .title');
				if (titleEl) titleEl.textContent = e.data.name;
				// Update window state title
				if (win.id && windowStates.has(win.id)) {
					const state = windowStates.get(win.id);
					if (state) state.title = e.data.name;
					notifyListeners();
				}
			}
		}
	}
});

/**
 * Global storage listener to handle settings updates across tabs/windows.
 */
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

/**
 * Destroys and cleans up the `BackdropRefraction` blur instance for a given window.
 * 
 * @param {string} winId - The ID of the window to clean up.
 * @returns {void}
 */
const cleanupWindowBlur = (winId) => {
	if (refractionInstances.has(winId)) {
		const instance = refractionInstances.get(winId);
		instance.destroy();
		refractionInstances.delete(winId);
	}
};

/**
 * Applies custom backdrop refraction blur to a window based on `localStorage` preferences.
 * 
 * @param {string} winId - The ID of the target window DOM element.
 * @returns {void}
 */
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

/** @type {number} */
let baseZIndex = 1000;

/** @type {number} */
let bottomZIndex = 100;

/** @type {number} */
let topZIndex = 10000;

/** @type {number} */
let windowCounter = 0;

/** @type {Map<string, InstanceType<typeof BackdropRefraction>>} */
const refractionInstances = new Map();

/** @type {Map<string, WindowState>} Window state tracking for the desktop panel */
const windowStates = new Map();

/** @type {Set<WindowChangeCallback>} */
const changeListeners = new Set();

/**
 * Notifies all registered listeners about window state changes.
 * @returns {void}
 */
const notifyListeners = () => {
	const windows = getWindows();
	changeListeners.forEach(fn => fn(windows));
};

/**
 * Registers a callback listener to monitor window state changes.
 * Executes the callback immediately upon registration with current window states.
 * 
 * @param {WindowChangeCallback} callback - Function to run when window state updates.
 * @returns {void}
 */
export const onWindowChange = (callback) => {
	changeListeners.add(callback);
	// Immediately call with current state
	callback(getWindows());
};

/**
 * Unregisters a window change listener callback.
 * 
 * @param {WindowChangeCallback} callback - Function to remove from change listeners.
 * @returns {void}
 */
export const offWindowChange = (callback) => {
	changeListeners.delete(callback);
};

/**
 * Retrieves all currently active window objects and their state metadata.
 * 
 * @returns {WindowInfo[]} An array of objects representing all active windows.
 */
export const getWindows = () => {
	return [...windowStates.entries()].map(([id, state]) => ({
		id,
		...state
	}));
};

/**
 * Focuses a specific window by its ID, bringing it to the foreground.
 * 
 * @param {string} windowId - The DOM ID of the window to focus.
 * @returns {void}
 */
export const focusWindow = (windowId) => {
	const el = document.getElementById(windowId);
	if (el) {
		$(el).trigger('mousedown');
	}
};

/**
 * Closes a window, releasing its blur instance, removing state, and destroying its DOM element.
 * 
 * @param {string} windowId - The DOM ID of the window to close.
 * @returns {void}
 */
export const closeWindow = (windowId) => {
	const el = document.getElementById(windowId);
	if (el) {
		cleanupWindowBlur(windowId);
		windowStates.delete(windowId);
		$(el).remove();
		notifyListeners();
	}
};

/**
 * Creates, constructs, and opens a new application window inside the desktop environment.
 * 
 * @param {string} target - The URL or route for the application loaded within the iframe.
 * @param {Record<string, string|number|boolean>|null} [params] - Optional query parameters to append to the target URL.
 * @param {WindowProperties} [properties={}] - Additional configuration options for window dimensions and behaviors.
 * @returns {void}
 */
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
		target = `${target}?${new URLSearchParams(/** @type {Record<string, string>} */ (params)).toString()}`;
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

	/**
	 * Updates the window's z-index and brings it to focus status.
	 * @returns {void}
	 */
	const updateZIndex = () => {
		$('.window').removeClass('focused');
		$win.addClass('focused');
		if (alwaysOnTop) {
			$win.css('z-index', ++topZIndex);
		} else if (alwaysOnBottom) {
			$win.css('z-index', ++bottomZIndex);
		} else {
			$win.css('z-index', ++baseZIndex);
		}
		// Update focused state on all windows
		windowStates.forEach((st, id) => {
			st.focused = (id === windowId);
		});
		notifyListeners();
	};

	$win.on('mousedown', updateZIndex);

	$iframe.on('load', function () {
		try {
			const iframeWindow = /** @type {HTMLIFrameElement} */ (this).contentWindow;
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
		windowStates.delete(windowId);
		$win.remove();
		notifyListeners();
	});

	$win.find('.minimizeButton').on('click', () => {
		$win.toggleClass('minimized');
		$win.removeClass('maximized');
		const state = windowStates.get(windowId);
		if (state) {
			state.minimized = $win.hasClass('minimized');
			state.maximized = false;
			notifyListeners();
		}
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
			const state = windowStates.get(windowId);
			if (state) {
				state.maximized = false;
				notifyListeners();
			}
		} else {
			// Only save preMaxState if not currently minimized,
			// otherwise we'd capture the minimized (tiny) dimensions.
			if (!$win.hasClass('minimized')) {
				preMaxState = {
					top: /** @type {string} */ ($win.css('top')),
					left: /** @type {string} */ ($win.css('left')),
					width: /** @type {string} */ ($win.css('width')),
					height: /** @type {string} */ ($win.css('height'))
				};
			}
			$win.removeClass('minimized').addClass('maximized').removeAttr('style');
			updateZIndex();
			const state = windowStates.get(windowId);
			if (state) {
				state.minimized = false;
				state.maximized = true;
				notifyListeners();
			}
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
			let startTop = parseInt(/** @type {string} */ ($win.css('top')), 10) || 0;
			let startLeft = parseInt(/** @type {string} */ ($win.css('left')), 10) || 0;

			$('.windowbody').css('pointer-events', 'none');

			/**
			 * Handles window dragging movement.
			 * @param {MouseEvent} moveEvent
			 */
			const onMouseMove = (moveEvent) => {
				$win.css({
					top: startTop + (moveEvent.clientY - startY),
					left: startLeft + (moveEvent.clientX - startX)
				});
			};

			/**
			 * Cleans up listeners when window drag ends.
			 */
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

		const dir = String($(this).data('dir'));
		let startX = e.clientX, startY = e.clientY;
		let startTop = parseInt(/** @type {string} */ ($win.css('top')), 10);
		let startLeft = parseInt(/** @type {string} */ ($win.css('left')), 10);
		let startWidth = /** @type {number} */ ($win.width());
		let startHeight = /** @type {number} */ ($win.height());

		$('.windowbody').css('pointer-events', 'none');

		/**
		 * Handles window resizing calculations based on direction handle.
		 * @param {MouseEvent} moveEvent
		 */
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

		/**
		 * Cleans up listeners when window resize ends.
		 */
		const onMouseUp = () => {
			$(document).off('mousemove', onMouseMove).off('mouseup', onMouseUp);
			$('.windowbody').css('pointer-events', '');
		};

		$(document).on('mousemove', onMouseMove).on('mouseup', onMouseUp);
	});

	$("body").append($win);

	// Track window state
	windowStates.set(windowId, {
		title: target,
		minimized: !!minimized,
		maximized: !!maximized,
		focused: false
	});

	updateZIndex();
	applyBlurToWindow(windowId);
};