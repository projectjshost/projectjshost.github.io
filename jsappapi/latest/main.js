import $ from 'https://esm.sh/jquery';

import themeEngine from './themeEngine.js';
import { createWallpaper } from './wallpaper.js';

// Project JS App API

//      Project JS App Stuff
export const projectJS = {
	version: "2.6",
	build: 260518,
	launcher: "appcenter",
};

// Pre-load
if (!localStorage.theme) {
	localStorage.theme = themeEngine.getDefault();
}
themeEngine.loadTheme();

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

	if (localStorage.forceWallpaper == "true" && localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper)
	}
	$('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/latest/interface.css">`);
	setAppName(appname)
});

// Opens an App
export const openApp = (appName, params) => {
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
}

// const openAppWindow = (target) => {
// 	$("body").append(`
// 		<div class="window">
// 			<div class="titlebar">
// 				<span class="title">${target}</span>
// 				<div class="captionbuttons">
// 					<button>Close</button>
// 				</div>
// 			</div>
// 			<iframe class="windowbody" src="/${target}/?windowed=true">
// 			</iframe>
// 		</div>
// 	`)
// }