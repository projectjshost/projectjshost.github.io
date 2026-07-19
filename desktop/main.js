import { openAppWindow, onWindowChange, focusWindow, closeWindow } from "../jsappapi/latest/wm.js";

document.body.classList.add('has-desktoppanel');

window.openAppWindow = openAppWindow;

const appsMenu = document.createElement('div');
appsMenu.className = 'context-menu hidden';
appsMenu.id = 'appsMenu';
document.body.appendChild(appsMenu);
appsMenu.innerHTML = `<iframe id="appsMenuInner" src="/appcenter" />`;

const appsButton = document.querySelector('.panel-apps-button');

appsButton.addEventListener('click', (e) => {
	e.stopPropagation();
	if (appsMenu.classList.contains('hidden')) {
		const btnRect = appsButton.getBoundingClientRect();
		appsMenu.style.left = `${btnRect.left}px`;
		appsMenu.style.top = `${btnRect.bottom + 5}px`;
		appsMenu.classList.remove('hidden');
	} else {
		appsMenu.classList.add('hidden');
	}
});

// Close menu when clicking outside
document.addEventListener('mousedown', (e) => {
	if (!appsMenu.classList.contains('hidden') &&
		e.target !== appsButton) {
		appsMenu.classList.add('hidden');
	}
});

// ── Window list ─────────────────────────────────────────────────────
const windowList = document.querySelector('.panel-window-list');

const renderWindowList = (windows) => {
	windowList.innerHTML = '';

	windows.forEach(win => {
		const btn = document.createElement('button');
		btn.className = 'panel-window-item';
		if (win.focused) btn.classList.add('active');
		if (win.minimized) btn.classList.add('minimized');

		// Truncate long titles
		let title = win.title || 'Untitled';

		btn.textContent = title;
		btn.title = win.title;

		btn.addEventListener('click', () => {
			if (win.minimized) {
				// Restore from minimized
				const el = document.getElementById(win.id);
				if (el) {
					el.classList.remove('minimized');
				}
			}
			focusWindow(win.id);
		});

		// Middle-click / aux-click to close
		btn.addEventListener('auxclick', (e) => {
			if (e.button === 1) {
				e.preventDefault();
				closeWindow(win.id);
			}
		});

		windowList.appendChild(btn);
	});
};

onWindowChange(renderWindowList);

// ── Clock ───────────────────────────────────────────────────────────
const clockEl = document.querySelector('.panel-clock');

const updateClock = () => {
	const now = new Date();
	const hh = String(now.getHours()).padStart(2, '0');
	const mm = String(now.getMinutes()).padStart(2, '0');
	clockEl.textContent = `${hh}:${mm}`;
};

updateClock();
setInterval(updateClock, 1000);
