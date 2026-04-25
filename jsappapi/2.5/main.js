// Project JS App API

//      Project JS App Stuff
const projectJS = {
	version: "2.5",
	build: 260425,
	launcher: "appcenter",
};

const themes = {
	"epilogue": {
		"name": "Epilogue",
		"background-color": "hsl(240,5%,5%)",
		"area-background-color": "hsl(240,5%,10%)",
		"title-color": "hsl(210,5%,91%)",
		"text-color": "hsl(210,5%,61%)",
		"border-color": "hsl(240,5%,25%)",
		"button-color": "hsl(240,5%,17%)",
		"accent-color": "hsl(210,100%,83%)"
	},
	"mintlight": {
		"name": "Mint Light",
		"background-color": "hsl(120, 5%, 95%)",
		"area-background-color": "hsl(120, 5%, 90%)",
		"title-color": "hsl(120, 40%, 20%)",
		"text-color": "hsl(120, 15%, 40%)",
		"border-color": "hsl(120, 8%, 75%)",
		"button-color": "hsl(120, 10%, 82%)",
		"accent-color": "hsl(150, 40%, 40%)"
	},
	"mintdark": {
		"name": "Mint Dark",
		"background-color": "hsl(120, 5%, 5%)",
		"area-background-color": "hsl(120, 5%, 10%)",
		"title-color": "hsl(120, 40%, 80%)",
		"text-color": "hsl(120, 15%, 60%)",
		"border-color": "hsl(120, 8%, 25%)",
		"button-color": "hsl(120, 10%, 20%)",
		"accent-color": "hsl(150, 75%, 60%)"
	},
	"catppuccin": {
		"name": "Catppuccin",
		"background-color": "hsl(254,  25%,  10%)",
		"area-background-color": "hsl(240,  21%,  15%)",
		"title-color": "hsl(220,  38%,  89%)",
		"text-color": "hsl(285,  10%,  75%)",
		"border-color": "hsl(254,  12%,  36%)",
		"button-color": "hsl(249,  18%,  22%)",
		"accent-color": "hsl(24,  88%,  78%)"
	},
	"gruvbox": {
		"name": "Gruvbox",
		"background-color": "#1d2021",
		"area-background-color": "#282828",
		"title-color": "#ebdbb2",
		"text-color": "#bdae93",
		"border-color": "#504945",
		"button-color": "#3c3836",
		"accent-color": "#fabd2f"
	},
	"nord": {
		"name": "Nord",
		"background-color": "#2e3440",
		"area-background-color": "#3b4252",
		"title-color": "#eceff4",
		"text-color": "#d8dee9",
		"border-color": "#5b677f",
		"button-color": "#4c566a",
		"accent-color": "#a3be8c"
	},
	"nordlight": {
		"name": "Nord Light",
		"background-color": "hsl(220, 13%, 95%)",
		"area-background-color": "hsl(220, 16%, 90%)",
		"title-color": "hsl(220, 16%, 20%)",
		"text-color": "hsl(220, 12%, 9%)",
		"border-color": "hsl(220, 20%, 60%)",
		"button-color": "hsl(220, 14%, 80%)",
		"accent-color": "hsl(74, 30%, 45%)"
	},
	"mirai": {
		"name": "Mirai",
		"background-color": "hsl(220, 22%, 10%)",
		"area-background-color": "hsl(220, 23%, 15%)",
		"title-color": "hsl(195, 50%, 91%)",
		"text-color": "hsl(195, 15%, 61%)",
		"border-color": "hsl(195, 15%, 28%)",
		"button-color": "hsl(220, 22%, 20%)",
		"accent-color": "hsl(195, 55%, 83%)"
	},
	"zinc": {
		"name": "Zinc",
		"background-color": "hsl(0,0%,0%)",
		"area-background-color": "hsl(240,15%,5%)",
		"title-color": "hsl(0,0%,100%)",
		"text-color": "hsl(210,10%,61%)",
		"border-color": "hsl(240,10%,25%)",
		"button-color": "hsl(240,10%,17%)",
		"accent-color": "hsl(0,0%,100%)"
	},
	"mocha": {
		"name": "Mocha",
		"background-color": "#FCFBF9",
		"area-background-color": "#F5EFEA",
		"title-color": "#31231E",
		"text-color": "#78645C",
		"border-color": "#E8DCD6",
		"button-color": "#F0E5DE",
		"accent-color": "#9E7A68"
	},
	"teal": {
		"name": "Teal",
		"background-color": "#061417",
		"area-background-color": "#0B1E23",
		"title-color": "#E3F2F5",
		"text-color": "#84A7AD",
		"border-color": "#1B3B42",
		"button-color": "#122A30",
		"accent-color": "#15B8B8"
	},
	"lavender": {
		"name": "Lavender",
		"background-color": "#12111A",
		"area-background-color": "#1A1926",
		"title-color": "#EBEBF2",
		"text-color": "#9B9BAE",
		"border-color": "#312F47",
		"button-color": "#222033",
		"accent-color": "#E6E6FA"
	},
	"acidforest": {
		"name": "Acid Forest",
		"background-color": "#0C1410",
		"area-background-color": "#111C16",
		"title-color": "#E6F0E9",
		"text-color": "#8A9A5B",
		"border-color": "#283C30",
		"button-color": "#1A4D2E",
		"accent-color": "#DFFF00"
	},
	"cyberrose": {
		"name": "Cyber Rose",
		"background-color": "#16191B",
		"area-background-color": "#1E2225",
		"title-color": "#F2F4F7",
		"text-color": "#8F98A8",
		"border-color": "#3D444A",
		"button-color": "#2D3436",
		"accent-color": "#EF5777"
	},
	"carbonmint": {
		"name": "Carbon Mint",
		"background-color": "#0A0A0A",
		"area-background-color": "#121212",
		"title-color": "#F8F9FA",
		"text-color": "#4B79A1",
		"border-color": "#2B2B2B",
		"button-color": "#1A1A1A",
		"accent-color": "#00FFC2"
	},
	"synthwave": {
		"name": "Synthwave",
		"background-color": "hsl(240, 20%, 5%)",
		"area-background-color": "hsl(240, 20%, 10%)",
		"title-color": "hsl(240, 20%, 90%)",
		"text-color": "hsl(240, 20%, 75%)",
		"border-color": "hsl(240, 20%, 40%)",
		"button-color": "hsl(240, 20%, 25%)",
		"accent-color": "hsl(330, 50%, 70%)"
	},
	"candy": {
		"name": "Candy",
		"background-color": "hsl(0, 0%, 96%)",
		"area-background-color": "hsl(0, 0%, 100%)",
		"title-color": "hsl(0, 0%, 0%)",
		"text-color": "hsl(0, 0%, 40%)",
		"border-color": "hsl(0, 0%, 80%)",
		"button-color": "hsl(350, 50%, 90%)",
		"accent-color": "hsl(330, 60%, 60%)"
	},
	"autumn": {
		"name": "Autumn",
		"background-color": "hsl(30, 20%, 10%)",
		"area-background-color": "hsl(30, 20%, 15%)",
		"title-color": "hsl(30, 20%, 90%)",
		"text-color": "hsl(30, 20%, 70%)",
		"border-color": "hsl(30, 20%, 30%)",
		"button-color": "hsl(30, 20%, 20%)",
		"accent-color": "hsl(30, 80%, 50%)"
	},
	"autumnlight": {
		"name": "Autumn Light",
		"background-color": "hsl(30, 20%, 90%)",
		"area-background-color": "hsl(30, 20%, 85%)",
		"title-color": "hsl(30, 20%, 10%)",
		"text-color": "hsl(30, 20%, 30%)",
		"border-color": "hsl(30, 20%, 60%)",
		"button-color": "hsl(30, 20%, 75%)",
		"accent-color": "hsl(30, 80%, 40%)"
	},
	"spring": {
		"name": "Spring",
		"background-color": "hsl(120, 10%, 10%)",
		"area-background-color": "hsl(120, 10%, 15%)",
		"title-color": "hsl(220, 38%, 89%)",
		"text-color": "hsl(285, 10%, 75%)",
		"border-color": "hsl(120, 10%, 36%)",
		"button-color": "hsl(120, 10%, 22%)",
		"accent-color": "hsl(120, 50%, 70%)"
	},
	"winter": {
		"name": "Winter",
		"background-color": "hsl(240, 10%, 10%)",
		"area-background-color": "hsl(240, 10%, 15%)",
		"title-color": "hsl(220, 38%, 89%)",
		"text-color": "hsl(285, 10%, 75%)",
		"border-color": "hsl(240, 10%, 36%)",
		"button-color": "hsl(240, 10%, 22%)",
		"accent-color": "hsl(240, 50%, 70%)"
	},
	"lavender": {
		"name": "Lavender",
		"background-color": "hsl(270, 70%, 90%)",
		"area-background-color": "hsl(270, 30%, 80%)",
		"title-color": "hsl(270, 30%, 20%)",
		"text-color": "hsl(270, 30%, 40%)",
		"border-color": "hsl(270, 30%, 50%)",
		"button-color": "hsl(270, 30%, 70%)",
		"accent-color": "hsl(270, 30%, 50%)"
	}
}

const apps = [
	{ "name": "Settings", "category": "Utilities", "target": "settings", "icon": "settings" },
	{ "name": "Clock", "category": "Utilities", "target": "clock", "isClock": true },
	{ "name": "Calculator", "category": "Utilities", "target": "calculator", "icon": "calculator" },
	{ "name": "Random", "category": "Utilities", "target": "random", "icon": "dice" },
	{ "name": "Compress Pics", "category": "Utilities", "target": "imageconverter", "icon": "zip" },
	{ "name": "Encrypt Text", "category": "Utilities", "target": "safeencrypt", "icon": "key" },
	{ "name": "Terminal", "category": "Utilities", "target": "terminal", "icon": "terminal" },
	{ "name": "Virtual PC", "category": "Utilities", "target": "virtualpc", "icon": "computer" },
	{ "name": "Notes", "category": "Create", "target": "quicknote", "icon": "note" },
	{ "name": "Chat", "category": "Create", "target": "chat", "icon": "chat_ai" },
	{ "name": "Generate Pics", "category": "Create", "target": "imagegenerator", "icon": "image" },
	{ "name": "Code", "category": "Create", "target": "codepad", "icon": "code" },
	{ "name": "Portal", "category": "Fun", "target": "portal", "icon": "portal" },
	{ "name": "Minecraft", "category": "Fun", "target": "minecraft", "icon": "minecraft" },
	{ "name": "Getting Over It", "category": "Fun", "target": "gettingoverit", "icon": "scratchcat" },
	{ "name": "Bad Piggies", "category": "Fun", "target": "badpiggies", "icon": "badpiggies" },
	{ "name": "Baldi's Basics", "category": "Fun", "target": "baldi", "icon": "baldi" },
	{ "name": "Geometry", "category": "Fun", "target": "gdash", "icon": "gdash" },
	{ "name": "Deltarune", "category": "Fun", "target": "deltarune", "icon": "deltarune" },
	{ "name": "Subway", "category": "Fun", "target": "ssurfers", "icon": "ssurfers" },
	{ "name": "Granny", "category": "Fun", "target": "granny", "icon": "granny" },
	{ "name": "Fractal", "category": "Fun", "target": "fractal", "icon": "fractal" },
	{ "name": "Mario", "category": "Fun", "target": "https://foss2016.github.io/", "icon": "questionblock" },
	{ "name": "HexGL", "category": "Fun", "target": "https://hexgl.bkcore.com/play/", "icon": "hexgl" },
	{ "name": "2048", "category": "Fun", "target": "https://2048-opera-pwa.surge.sh/", "icon": "2048" },
	{ "name": "Tetris", "category": "Fun", "target": "https://tmaiadev-tetra.netlify.app/", "icon": "tetra" },
	{ "name": "Mahjong", "category": "Fun", "target": "https://mahjong.jull.dev/", "icon": "mahjong" }
]
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
	loadFromJSON(json) {
		const documentRoot = document.querySelector(':root');
		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			try {
				documentRoot.style.setProperty(`--${prop}`, json[prop]);
			} catch (error) {
				console.error(error)
			}
		});
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
	$('head').append(`<link rel="stylesheet" id="JSinterface" href="/jsappapi/latest/interface.css">`);
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
