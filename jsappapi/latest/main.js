// Project JS App API
// Ver 2.5

//      Project JS App Stuff
const projectJS = {
	version: "2.5",
	type: "Release",
	build: 260310,
	launcher: "appcenter",
};

const themes = {
	"epilogue": {
		"name": "Epilogue",
		"background": "hsl(240,5%,5%)",
		"background2": "hsl(240,5%,10%)",
		"foreground": "hsl(210,5%,91%)",
		"foreground2": "hsl(210,5%,61%)",
		"border": "hsl(240,5%,25%)",
		"element": "hsl(240,5%,17%)",
		"active": "hsl(240,5%,24%)",
		"accent": "hsl(210,100%,83%)"
	},
	"mintlight": {
		"name": "Mint Light",
		"background": "hsl(120, 5%, 95%)",
		"background2": "hsl(120, 5%, 90%)",
		"foreground": "hsl(120, 40%, 20%)",
		"foreground2": "hsl(120, 15%, 40%)",
		"border": "hsl(120, 8%, 75%)",
		"element": "hsl(120, 10%, 82%)",
		"active": "hsl(120, 10%, 77%)",
		"accent": "hsl(150, 40%, 40%)"
	},
	"mintdark": {
		"name": "Mint Dark",
		"background": "hsl(120, 5%, 5%)",
		"background2": "hsl(120, 5%, 10%)",
		"foreground": "hsl(120, 40%, 80%)",
		"foreground2": "hsl(120, 15%, 60%)",
		"border": "hsl(120, 8%, 25%)",
		"element": "hsl(120, 10%, 20%)",
		"active": "hsl(120, 10%, 25%)",
		"accent": "hsl(150, 75%, 60%)"
	},
	"catppuccin": {
		"name": "Catppuccin",
		"background": "hsl(254,  25%,  10%)",
		"background2": "hsl(240,  21%,  15%)",
		"foreground": "hsl(220,  38%,  89%)",
		"foreground2": "hsl(285,  10%,  75%)",
		"border": "hsl(254,  12%,  36%)",
		"element": "hsl(249,  18%,  22%)",
		"active": "hsl(254,  16%,  26%)",
		"accent": "hsl(24,  88%,  78%)"
	},
	"gruvbox": {
		"name": "Gruvbox",
		"background": "#1d2021",
		"background2": "#282828",
		"foreground": "#ebdbb2",
		"foreground2": "#bdae93",
		"border": "#504945",
		"element": "#3c3836",
		"active": "#32302f",
		"accent": "#fabd2f"
	},
	"nord": {
		"name": "Nord",
		"background": "#2e3440",
		"background2": "#3b4252",
		"foreground": "#eceff4",
		"foreground2": "#d8dee9",
		"border": "#5b677f",
		"element": "#4c566a",
		"active": "#434c5e",
		"accent": "#a3be8c"
	},
	"mirai": {
		"name": "Mirai",
		"background": "hsl(220, 22%, 10%)",
		"background2": "hsl(220, 23%, 15%)",
		"foreground": "hsl(195, 50%, 91%)",
		"foreground2": "hsl(195, 15%, 61%)",
		"border": "hsl(195, 15%, 28%)",
		"element": "hsl(220, 22%, 20%)",
		"active": "hsl(220, 23%, 24%)",
		"accent": "hsl(195, 55%, 83%)"
	},
	"zinc": {
		"name": "Zinc",
		"background": "hsl(0,0%,0%)",
		"background2": "hsl(240,15%,5%)",
		"foreground": "hsl(0,0%,100%)",
		"foreground2": "hsl(210,10%,61%)",
		"border": "hsl(240,10%,25%)",
		"element": "hsl(240,10%,17%)",
		"active": "hsl(240,10%,24%)",
		"accent": "hsl(0,0%,100%)"
	},
	"mocha": {
		"name": "Mocha",
		"background": "#FCFBF9",
		"background2": "#F5EFEA",
		"foreground": "#31231E",
		"foreground2": "#78645C",
		"border": "#E8DCD6",
		"element": "#F0E5DE",
		"active": "#E6D8CE",
		"accent": "#9E7A68"
	},
	"teal": {
		"name": "Teal",
		"background": "#061417",
		"background2": "#0B1E23",
		"foreground": "#E3F2F5",
		"foreground2": "#84A7AD",
		"border": "#1B3B42",
		"element": "#122A30",
		"active": "#17343C",
		"accent": "#15B8B8"
	},
	"lavender": {
		"name": "Lavender",
		"background": "#12111A",
		"background2": "#1A1926",
		"foreground": "#EBEBF2",
		"foreground2": "#9B9BAE",
		"border": "#312F47",
		"element": "#222033",
		"active": "#2A283D",
		"accent": "#E6E6FA"
	},
	"warm": {
		"name": "Warm",
		"background": "#F5E8D3",
		"background2": "#EBE0CB",
		"foreground": "#2C3E50",
		"foreground2": "#6B7A8A",
		"border": "#D9CEBC",
		"element": "#E3D7C3",
		"active": "#D9CDB9",
		"accent": "#D4A5A5"
	},
	"acidforest": {
		"name": "Acid Forest",
		"background": "#0C1410",
		"background2": "#111C16",
		"foreground": "#E6F0E9",
		"foreground2": "#8A9A5B",
		"border": "#283C30",
		"element": "#1A4D2E",
		"active": "#1E5936",
		"accent": "#DFFF00"
	},
	"cyberrose": {
		"name": "Cyber Rose",
		"background": "#16191B",
		"background2": "#1E2225",
		"foreground": "#F2F4F7",
		"foreground2": "#8F98A8",
		"border": "#3D444A",
		"element": "#2D3436",
		"active": "#374042",
		"accent": "#EF5777"
	},
	"carbonmint": {
		"name": "Carbon Mint",
		"background": "#0A0A0A",
		"background2": "#121212",
		"foreground": "#F8F9FA",
		"foreground2": "#4B79A1",
		"border": "#2B2B2B",
		"element": "#1A1A1A",
		"active": "#222222",
		"accent": "#00FFC2"
	}
}

const themeEngine = {
	default: "epilogue",
	loadTheme: (name) => {
		if (typeof name === "undefined") {
			if (localStorage.theme) {
				name = localStorage.theme
			} else {
				name = themeEngine.default
			}
		}
		// Unload custom theme
		document.querySelector(':root').removeAttribute('style');
		let themeObject = themes[name];
		if (name.substring(0, 12) == "customTheme_") {
			themeObject = JSON.parse(localStorage.getItem(name));
		}
		themeEngine.loadFromJSON(themeObject);
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

// Initialize App
$(document).ready(() => {
	if (!localStorage.lastUsedVersion) {
		localStorage.lastUsedVersion = projectJS.version;
		localStorage.theme = "epilogue";
		localStorage.forceWallpaper = "false";
		localStorage.blurWallpaper = "false";
		localStorage.darkenWallpaper = "false";
		location.reload()
	}

	if (typeof appname == 'undefined') {
		appname = "Project JS App"
	}

	$("header").append(`<div class='headerButtons'></div>`);

	// if (appname !== "Settings") {
	// 	$(".headerButtons").append(`<button class='headerButton icon' title='Settings' onclick='openApp("settings")'>settings</button>`);
	// }

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
	window.location = `/${appName}/`;
}

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

// LLM

const chat = async (messages, tools) => {
	let body;
	if (typeof tools === "object") {
		body = JSON.stringify({
			messages,
			tools
		})
	} else {
		body = JSON.stringify({
			messages
		})
	}
	const response = await fetch("https://llm-api.technobyte.workers.dev", {
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"body": body
	});

	return await response.json();
}

// Sandbox

const runInSandbox = (() => {
	let counter = 0;

	return function runInSandbox(code) {
		return new Promise((resolve, reject) => {
			const iframe = document.createElement('iframe');
			iframe.style.cssText = 'display:none;width:0;height:0;border:0;';
			iframe.setAttribute('sandbox', 'allow-scripts');

			iframe.srcdoc = `
			<!doctype html>
			<html>
			<body>
				<script>
				(function () {
					const reply = (data) => parent.postMessage(data, '*');

					window.addEventListener('message', async (event) => {
					if (event.source !== parent || !event.data || event.data.type !== 'execute') return;

					const { id, code } = event.data;

					try {
						const value = await Promise.resolve(eval(code));

						try {
						reply({ type: 'result', id, result: value });
						} catch (cloneErr) {
						let serialized;
						try {
							serialized = JSON.stringify(value);
						} catch (_) {
							serialized = String(value);
						}
						reply({ type: 'result', id, nonCloneable: true, serialized });
						}
					} catch (error) {
						reply({
						type: 'error',
						id,
						error: { name: error.name, message: error.message, stack: error.stack }
						});
					}
					});
				})();
				<\/script>
			</body>
			</html>
			`;

			const id = `sandbox-${++counter}`;

			const cleanup = () => {
				window.removeEventListener('message', handleMessage);
				iframe.remove();
			};

			const handleMessage = (event) => {
				if (event.source !== iframe.contentWindow || !event.data || event.data.id !== id) return;

				if (event.data.type === 'result') {
					cleanup();
					const { nonCloneable, serialized, result } = event.data;
					resolve(nonCloneable ? serialized : result);
				} else if (event.data.type === 'error') {
					cleanup();
					const err = new Error(event.data.error.message);
					err.name = event.data.error.name;
					err.stack = event.data.error.stack;
					reject(err);
				}
			};

			window.addEventListener('message', handleMessage);

			document.body.appendChild(iframe);

			iframe.addEventListener('load', () => {
				iframe.contentWindow.postMessage({ type: 'execute', id, code }, '*');
			});
		});
	};
})();

const runInSandboxString = async (code) => {
	let output;
	try {
		output = await runInSandbox(code);
	} catch (error) {
		return `Error: ${error.message}`;
	}

	if (typeof output === 'string') {
		return output;
	}

	if (typeof output === 'object' && output !== null) {
		return JSON.stringify(output, null, 2);
	}

	if (typeof output === 'undefined') {
		return 'undefined';
	}

	return String(output);
};


const sha256 = async (message) => {
	// encode as UTF-8
	const msgBuffer = new TextEncoder().encode(message);

	// hash the message
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

	// convert ArrayBuffer to Array
	const hashArray = Array.from(new Uint8Array(hashBuffer));

	// convert bytes to hex string
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

const cyrb53 = (str, seed = 0) => {
	let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
	h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
	h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
