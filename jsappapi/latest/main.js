import $ from 'https://esm.sh/jquery';

export const isWindowed = window.top.location.pathname.startsWith("/desktop") && !location.pathname.startsWith("/desktop");


import themeEngine from './themeEngine.js';
import { createWallpaper, deleteWallpaper } from './wallpaper.js';

// Project JS App API

//      Project JS App Stuff
export const projectJS = {
	version: "2.6",
	build: 260709,
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

// Initialize App
$(document).ready(() => {
	try {
		if (typeof window.localStorage === "undefined") throw new Error();
		const testItemName = "__internal_ls_test__";
		localStorage.setItem(testItemName, "test");
		if (localStorage.getItem(testItemName) !== "test") throw new Error();
		localStorage[testItemName] = "test2";
		if (localStorage[testItemName] !== "test2") throw new Error();
		localStorage.removeItem(testItemName);
	} catch {
		const failMessage = "LocalStorage is not working properly. Please exit private/incognito mode, check your browser settings, or create a new profile.";
		console.error("LocalStorage test failed!");
		document.write(failMessage);
		window.stop();
		alert(failMessage);
		return;
	}
	if (!localStorage.lastUsedVersion) {
		localStorage.lastUsedVersion = projectJS.version;
		localStorage.theme = themeEngine.getDefault();
		localStorage.uiTransparency = "true";
		localStorage.forceWallpaper = "false";
		localStorage.blurWallpaper = "false";
		localStorage.darkenWallpaper = "false";
		location.reload()
	}

	if (typeof window.appname == 'undefined') {
		window.appname = "Project JS App"
	}

	$("header").append(`<div class='headerButtons'></div>`);

	if (location.pathname == `/${projectJS.launcher}/`) {
		if (localStorage.wallpaper) {
			createWallpaper(localStorage.wallpaper);
		}
	} else {
		$(".headerButtons").append(`<button class='headerButton icon' id='launcherButton' title='Home'>home</button>`);
		$("#launcherButton").on('click', () => { openApp(projectJS.launcher) })
	}

	if (isWindowed) {
		$(document.body).addClass("windowed");
	}

	if (localStorage.forceWallpaper == "true" && localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper)
	}
	$('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/latest/interface.css">`);
	setAppName(appname)
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
	window.appname = name
	$("#header").text(name);
	document.title = `${name} - Project JS Apps`
	if (isWindowed) {
		window.top.postMessage({ type: 'setAppName', name }, '*');
	}
}
