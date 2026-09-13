export const isWindowed = window.top.location.pathname.startsWith("/desktop") && !location.pathname.startsWith("/desktop");

import themeEngine from './themeEngine.js';
import { createWallpaper, deleteWallpaper } from './wallpaper.js';

// Project JS App API

//      Project JS App Stuff
export const projectJS = {
	version: "2.6",
	launcher: localStorage.launcher ?? "appcenter",
};

// Pre-load
if (!localStorage.theme) {
	localStorage.theme = themeEngine.getDefault();
}
themeEngine.loadTheme();

window.addEventListener('storage', (event) => {
	switch (event.key) {
		case "uiTransparency":
		case "theme":
		case "blurRadius":
		case "opacity":
			themeEngine.loadTheme();
			break;
		case "blurWallpaper":
		case "darkenWallpaper":
		case "wallpaper":
			if (typeof localStorage.wallpaper === "string") {
				createWallpaper(localStorage.wallpaper);
			} else {
				deleteWallpaper();
			}
			break;
	}
});

// Opens an App
export const openApp = (appName, params) => {
	if (isWindowed) {
		window.top.openAppWindow(appName, params);
		return;
	}
	if (typeof params === "object") {
		window.location = `/${appName}/?${new URLSearchParams(params).toString()}`;
		return;
	}
	window.location = `/${appName}/`;
}

// Changes the name of the app
export const setAppName = (name) => {
	window.appname = name;
	document.title = `${name} - Project JS Apps`;
	if (isWindowed) {
		window.top.postMessage({ type: 'setAppName', name }, '*');
	}
	try {
		document.getElementById("header").textContent = name;
	} catch { }
}

// Adds an app-specific header button
export const addHeaderButton = ({ icon, title, id, onClick, className = '' }) => {
	const headerButtons = document.querySelector(".headerButtons");
	if (!headerButtons) return null;

	const btn = document.createElement("button");
	btn.className = `headerButton icon ${className}`.trim();
	if (id) btn.id = id;
	if (title) btn.title = title;
	btn.textContent = icon;

	if (typeof onClick === "function") {
		btn.addEventListener("click", onClick);
	}

	const launcherButton = document.getElementById("launcherButton");
	if (launcherButton) {
		headerButtons.insertBefore(btn, launcherButton);
	} else {
		headerButtons.appendChild(btn);
	}

	return btn;
};

if (localStorage.getItem("overridesEnabled") === "true") {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', async () => {
			try {
				const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
				console.log('Service Worker registered with scope:', reg.scope);
			} catch (err) {
				console.error('Service Worker registration failed:', err);
			}
		});
	}
} else {
	try {
		const root = await navigator.storage.getDirectory();
		await root.removeEntry(".overrides", { recursive: true });
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				for (const registration of registrations) {
					registration.unregister();
					console.log('Service Worker unregistered');
				}
			});
		}
		if (navigator.serviceWorker.controller !== null) location.reload();
	} catch { }
}

// Initialize App
if (!localStorage.lastUsedVersion) {
	localStorage.lastUsedVersion = projectJS.version;
	localStorage.theme = themeEngine.getDefault();
	localStorage.uiTransparency = "true";
	localStorage.forceWallpaper = "false";
	localStorage.blurWallpaper = "false";
	localStorage.darkenWallpaper = "false";
	location.reload();
}

if (typeof window.appname == 'undefined') {
	window.appname = "Project JS App";
}

document.getElementsByTagName("header")[0].insertAdjacentHTML("beforeend", `<div class='headerButtons'></div>`);

if (location.pathname == `/${projectJS.launcher}/`) {
	if (localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper);
	}
} else {
	document.getElementsByClassName("headerButtons")[0].insertAdjacentHTML("beforeend", `<button class='headerButton icon' id='launcherButton' title='Home'>home</button>`);
	document.getElementById("launcherButton").addEventListener('click', () => {
		openApp(projectJS.launcher);
	});
}

if (isWindowed) {
	document.body.classList.add("windowed");
}

if (localStorage.forceWallpaper == "true" && localStorage.wallpaper) {
	createWallpaper(localStorage.wallpaper);
}

document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" id="JSinterface" href="/jsappapi/latest/interface.css">`);

setAppName(appname);