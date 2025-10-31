// Project JS App API
// Ver 2.4

//      Project JS App Stuff
const projectJS = {
	version: "2.5",
	type: "Release",
	build: 251031,
	launcher: "appcenter",
};

// Gets app Parameters
const getAppParams = () => {
	let vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
		vars[key] = value;
	});
	return vars;
}

const getAppParam = (parameter, defaultvalue) => {
	let urlparameter = defaultvalue;
	if (window.location.href.indexOf(parameter) > -1) {
		urlparameter = getAppParams()[parameter];
	}
	return urlparameter;
}

let wallpaperCreated = false;

// Sets Wallpaper of App
const createWallpaper = (source) => {
	if (!wallpaperCreated && typeof source !== "undefined") {
		wallpaperCreated = true;
		$('html').append(`<div id="wallpaperElement"></div>`)
		if (localStorage.blurWallpaper == "true") {
			$('#wallpaperElement').addClass('blur');
		}
		if (localStorage.darkenWallpaper == "true") {
			$('#wallpaperElement').addClass('dark');
		}

		$('head').append(`<style id="wallpaper">#wallpaperElement{background-image:url("` + source + `")!important}body{background:transparent!important}</style>`)
	}
}

const deleteWallpaper = () => {
	wallpaperCreated = false;
	$("#wallpaper").remove()
	$("#wallpaperElement").remove()
}

// Resize app to a resolution
const resizeApp = (x, y) => {
	if (!window.screenTop && !window.screenY) {
		return false
	} else {
		window.resizeTo(x, y);
		return true
	}
}

// Firstrun (sets localstorage)
const firstRun = () => {
	localStorage.lastUsedVersion = projectJS.version;
	localStorage.theme = "epilogue";
	localStorage.forceWallpaper = "false";
	localStorage.blurWallpaper = "false";
	localStorage.darkenWallpaper = "false";
	location.reload()
}

// Initialize App
$(document).ready(() => {
	if (!localStorage.lastUsedVersion) {
		firstRun();
	}

	if (typeof appname == 'undefined') {
		appname = "Project JS App"
	}

	$("header").append(`<div class='headerButtons'></div>`);

	if (appname !== "Settings") {
		$(".headerButtons").append(`<button class='headerButton icon' title='Settings' onclick='openApp("settings")'>settings</button>`);
	}

	if (location.pathname == `/${projectJS.launcher}/`) {
		if (localStorage.wallpaper) {
			createWallpaper(localStorage.wallpaper);
		}
	} else {
		$(".headerButtons").append(`<button class='headerButton icon' id='launcherButton' title='Home' onclick='openApp(projectJS.launcher)'>home</button>`);
	}

	if (localStorage.forceWallpaper == "true" && localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper)
	}
	$('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/latest/interfaces/kan.css">`);
	setAppName(appname)
});

let dialogID = 0;

// Opens a dialog box
const dialog = (message, type, customTitle) => {
	message = message.replaceAll("\n", "<br>");
	$("body").append(`<div class="dialogOverlay" id="overlay` + dialogID + `" onclick="closeDialog(` + dialogID + `)"></div>`);
	$("body").append(`<style class="scrollDisable" id="scrollDisable` + dialogID + `">body{overflow-y:hidden;};</style>`);
	switch (type) {
		case "info":
			$("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">info</span>Info</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
			break;
		case "warn":
			$("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">warning</span>Warning</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Close</button></div>`);
			break;
		case "error":
			$("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">error</span>An error has occourred</p2>${message}<button onclick='closeDialog(` + dialogID + `)'>Close</button></div>`);
			break;
		case "custom":
			$("body").append(`<div class="dialog" id='dialog` + dialogID + `'><p2><span class="icon">info</span>${customTitle}</p2><p>${message}</p><button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
			break;
		default:
			$("body").append(`<div class="dialog" id='dialog` + dialogID + `'>${message}<button onclick='closeDialog(` + dialogID + `)'>Ok</button></div>`);
			break;
	}
	$("#overlay" + dialogID).hide();
	$("#overlay" + dialogID).fadeIn("100");
	$("#dialog" + dialogID).hide();
	$("#dialog" + dialogID).slideDown("100");
	dialogID++
}
// Close a dialog box with a specific id
const closeDialog = (id) => {
	$("#scrollDisable" + id).remove();
	$("#overlay" + id).remove();
	$("#dialog" + id).remove();
	dialogID--
}

// Opens an App
const openApp = (appName) => {
	location.pathname = "/" + appName + "/";
}

const themeEngine = {
	default: "epilogue",
	loadTheme: (name) => {
		if (typeof name == "undefined") {
			if (localStorage.theme) {
				name = localStorage.theme
			} else {
				name = themeEngine.default
			}
		}
		// Unload CSS theme
		$("#JStheme").remove();
		// Unload custom theme
		document.querySelector(':root').removeAttribute('style');
		// If the theme is custom use the loadFromJSON function else load it normally
		if (name.substring(0, 12) == "customTheme_") {
			themeEngine.loadFromJSON(JSON.parse(localStorage.getItem(name)));
		} else {
			$('head').append(`<link rel="stylesheet" id="JStheme" href="/themes/${name}.css">`);
		}
	},
	loadFromJSON: (json) => {
		const documentRoot = document.querySelector(':root');
		documentRoot.style.setProperty(`--background`, json["background"]);
		documentRoot.style.setProperty(`--background2`, json["background2"]);
		documentRoot.style.setProperty(`--foreground`, json["foreground"]);
		documentRoot.style.setProperty(`--foreground2`, json["foreground2"]);
		documentRoot.style.setProperty(`--border`, json["border"]);
		documentRoot.style.setProperty(`--element`, json["element"]);
		documentRoot.style.setProperty(`--active`, json["active"]);
		documentRoot.style.setProperty(`--accent`, json["accent"]);
	},
	setTheme: (name) => {
		if (name !== localStorage.theme) {
			if (typeof name == "undefined") {
				name = themeEngine.default
			}
			localStorage.theme = name;
			themeEngine.loadTheme(name)
		}
	}
}
if (!localStorage.theme) {
	localStorage.theme = themeEngine.default
}
themeEngine.loadTheme();

// Changes the name of the app
const setAppName = (name) => {
	appname = name
	$("#header").text(name);
	document.title = `${name} - Project JS Apps`
}

// Downloads a string as a file
const downloadAsFile = (fileName, content) => {
	let hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:application/octet-stream;base64,' + btoa(content);
	hiddenElement.target = '_blank';
	hiddenElement.download = fileName;
	hiddenElement.click();
}

//      Extra Functionality

// Random Number Generator
const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

const sanitizeText = (str) => {
	return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}