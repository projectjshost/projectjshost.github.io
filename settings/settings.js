import { projectJS, openApp } from '../jsappapi/latest/main.js';
import { themes } from '../jsappapi/latest/themes.js';
import themeEngine from '../jsappapi/latest/themeEngine.js';
import { dialog } from '../jsappapi/latest/dialog.js';
import { sanitizeText } from '../jsappapi/latest/sanitize.js';
import { deleteWallpaper, createWallpaper } from '../jsappapi/latest/wallpaper.js';
import { apps } from '../jsappapi/latest/apps.js';
import { getVersionString } from '../jsappapi/latest/version.js';

const saveBlurSettings = () => {
	localStorage.blurType = document.getElementById("blurType").value;
	localStorage.blurRadius = document.getElementById("blurRadius").value;
	localStorage.opacity = document.getElementById("opacity").value;

	document.getElementById("blurRadiusValue").textContent = localStorage.blurRadius;
	document.getElementById("opacityValue").textContent = localStorage.opacity;
};

const updateCheckBoxes = () => {
	localStorage.symbolicIcons = String(document.getElementById("symbolicIcons").checked);
	localStorage.hideWebApps = String(document.getElementById("hideWebApps").checked);
	localStorage.uiTransparency = String(document.getElementById("uiTransparency").checked);
	localStorage.forceWallpaper = String(document.getElementById("forceWallpaper").checked);
	localStorage.blurWallpaper = String(document.getElementById("blurWallpaper").checked);
	localStorage.darkenWallpaper = String(document.getElementById("darkenWallpaper").checked);
	localStorage.reverseTitlebar = String(document.getElementById("reverseTitlebar").checked);
	localStorage.trafficLightCaptionButtons = String(document.getElementById("trafficLightCaptionButtons").checked);

	saveBlurSettings();
	recreateWallpaper();
};

const updateLauncher = () => {
	const launcher = document.getElementById("launcherSelect").value;
	localStorage.launcher = launcher;
	projectJS.launcher = launcher;
};

const recreateWallpaper = () => {
	themeEngine.loadTheme();
	if (localStorage.forceWallpaper === "true" && localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper);
	} else {
		deleteWallpaper();
	}
};

const updateWallpaper = () => {
	const wallpaperNameEl = document.getElementById("wallpaperName");
	const getSourceButton = document.getElementById("getSourceButton");

	if (localStorage.getItem("wallpaperName") !== null) {
		wallpaperNameEl.textContent = "Current Wallpaper: " + localStorage.wallpaperName;
	} else {
		wallpaperNameEl.textContent = "Current Wallpaper: None";
	}

	if (!localStorage.wallpaperSource) {
		getSourceButton.style.display = "none";
	} else {
		getSourceButton.style.display = "";
	}
};

const importWallpaper = () => {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = '.avif,.webp,.jxl,.png,.jpg,.gif,.svg';

	input.onchange = e => {
		let file = e.target.files[0];

		let reader = new FileReader();
		reader.readAsDataURL(file);
		localStorage.wallpaperName = file.name;

		reader.onloadend = readerEvent => {
			let content = readerEvent.target.result;
			try {
				localStorage.setItem("wallpaper", content);
				localStorage.removeItem("wallpaperSource");
			} catch (err) {
				dialog(err.message, "error");
				clearWallpaper();
			}
			updateWallpaper();
		};
	};
	input.click();
};

export const clearWallpaper = () => {
	localStorage.removeItem("wallpaper");
	localStorage.removeItem("wallpaperName");
	localStorage.removeItem("wallpaperSource");
	updateWallpaper();
	deleteWallpaper();
};

const getSource = () => {
	dialog(`<a href="${localStorage.wallpaperSource}">${localStorage.wallpaperSource}</a>`, "custom", "Image Source");
};

const downloadWallpaper = () => {
	if (localStorage.wallpaper) {
		let title = localStorage.wallpaperSource ? localStorage.wallpaperName + ".avif" : localStorage.wallpaperName;
		dialog(`Download file: <a href="${localStorage.wallpaper}" download>${title}</a><br>Please note that the quality of the source is better.`, "custom", "Download Wallpaper");
	} else {
		dialog("Select a wallpaper first!", "error");
	}
};

const getWallpaperList = async () => {
	const wallpaperList = document.getElementById("wallpaperList");
	try {
		let response = await fetch(`/lib/wallpapers.json`);
		if (response.ok) {
			let json = await response.json();
			renderWallpaperList(json);
		} else {
			console.error(response);
			wallpaperList.append(`${response.status} ${response.statusText}`);
		}
	} catch (e) {
		wallpaperList.append(`${e}`);
	}
};

const renderWallpaperList = (source) => {
	const wallpaperList = document.getElementById("wallpaperList");

	for (let i = 0; i < source.length; i++) {
		let img = source[i];
		let url = `/lib/wallpapers/${img.name}.avif`;
		let thumb = `/lib/wallpapers/thumbnails/${img.name}.avif`;
		let codeName = img.name.replaceAll(" ", "_");

		const item = document.createElement("div");
		item.className = "wallpaperItem";
		item.id = `wallpaperItem${codeName}`;
		item.innerHTML = `
			<img src="${thumb}" alt="${img.name}">
			<div class="wallpaperOverlay">${img.name}<div class="small">${img.author}</div></div>
		`;

		item.addEventListener('click', () => {
			localStorage.setItem("wallpaper", url);
			localStorage.setItem("wallpaperName", img.name);
			localStorage.setItem("wallpaperSource", img.source);
			updateWallpaper();
			recreateWallpaper();
		});

		wallpaperList.appendChild(item);
	}
};

const resetAll = async () => {
	if (confirm("Are you sure? All data will be deleted. This can't be undone.")) {
		localStorage.clear();
		try {
			const root = await navigator.storage.getDirectory();
			for await (const name of root.keys()) {
				await root.removeEntry(name, { recursive: true });
			}
			console.log("OPFS cleared successfully.");
		} catch (error) {
			console.error("Failed to clear OPFS:", error);
		}
		document.write("All data has been successfully deleted.");
	}
};

const restoreHiddenApps = () => {
	localStorage.removeItem('hiddenApps');
	dialog('Restored all hidden apps.', 'info');
};

// Event Listeners
document.getElementById("launcherSelect").addEventListener('change', updateLauncher);
document.getElementById("restoreHiddenAppsButton").addEventListener('click', restoreHiddenApps);

document.getElementById("editThemeButton").addEventListener('click', () => { openApp("themeEditor"); });
document.getElementById("deleteThemeButton").addEventListener('click', () => {
	if (!confirm(`Are you sure you want to delete your custom theme: "${atob(localStorage.theme.slice(12))}"?`)) return;
	localStorage.removeItem(localStorage.theme);
	localStorage.theme = themeEngine.getDefault();
	themeEngine.loadTheme();
	tminit();
});

document.getElementById("clearWallpaperButton").addEventListener('click', clearWallpaper);
document.getElementById("importWallpaperButton").addEventListener('click', importWallpaper);
document.getElementById("downloadWallpaperButton").addEventListener('click', downloadWallpaper);
document.getElementById("getSourceButton").addEventListener('click', getSource);

document.getElementById("resetAllButton").addEventListener('click', resetAll);

document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
	checkbox.addEventListener('click', updateCheckBoxes);
});

document.getElementById("blurType").addEventListener('change', () => {
	saveBlurSettings();
	recreateWallpaper();
});

["blurRadius", "opacity"].forEach(id => {
	document.getElementById(id).addEventListener('input', () => {
		saveBlurSettings();
		recreateWallpaper();
	});
});

// Initial element state assignments
document.getElementById("launcherSelect").value = projectJS.launcher;

document.getElementById("symbolicIcons").checked = localStorage.symbolicIcons === "true";
document.getElementById("hideWebApps").checked = localStorage.hideWebApps === "true";
document.getElementById("uiTransparency").checked = localStorage.uiTransparency === "true";
document.getElementById("forceWallpaper").checked = localStorage.forceWallpaper === "true";
document.getElementById("blurWallpaper").checked = localStorage.blurWallpaper === "true";
document.getElementById("darkenWallpaper").checked = localStorage.darkenWallpaper === "true";
document.getElementById("reverseTitlebar").checked = localStorage.reverseTitlebar === "true";
document.getElementById("trafficLightCaptionButtons").checked = localStorage.trafficLightCaptionButtons === "true";

document.getElementById("blurType").value = localStorage.blurType || "native";
document.getElementById("blurRadius").value = localStorage.blurRadius || "20";
document.getElementById("opacity").value = localStorage.opacity || "50";
document.getElementById("blurRadiusValue").textContent = localStorage.blurRadius || "20";
document.getElementById("opacityValue").textContent = localStorage.opacity || "50";

updateWallpaper();
getWallpaperList();

document.getElementById("versionString").innerText = `Version ${projectJS.version} (${await getVersionString()})`;
document.getElementById("appCount").innerText = `Installed Apps: ${apps.length}`;

const tminit = () => {
	const currentView = document.getElementById("themeList");
	const deleteThemeButton = document.getElementById("deleteThemeButton");
	const selectedThemeLabel = document.getElementById("selectedThemeLabel");

	deleteThemeButton.style.display = "none";
	currentView.replaceChildren();

	const defaultThemes = Object.entries(themes).map(([id, data]) => ({
		id,
		isCustom: false,
		name: data.name,
		background: data["background-color"],
		accent: data["accent-color"]
	}));

	const customThemes = Object.keys(localStorage)
		.filter(key => key.startsWith("customTheme_"))
		.map(id => {
			const localData = JSON.parse(localStorage.getItem(id) || "{}");
			return {
				id,
				isCustom: true,
				name: sanitizeText(atob(id.slice(12))),
				background: localData["background-color"],
				accent: localData["accent-color"]
			};
		});

	const allThemes = [...customThemes, ...defaultThemes];

	allThemes.forEach(theme => {
		const isActive = theme.id === localStorage.theme;

		const item = document.createElement("div");
		item.className = `themeItem ${isActive ? 'active' : ''}`;
		item.title = theme.name;
		item.innerHTML = `
			<div class="theme">
				<div class="preview" style="background: ${theme.background}"></div>
				<div class="preview" style="background: ${theme.accent}"></div>
			</div>
		`;

		if (isActive) {
			selectedThemeLabel.textContent = `Selected theme: ${theme.name}`;
			if (theme.isCustom) {
				deleteThemeButton.style.display = "";
			}
		}

		item.addEventListener("mousedown", () => {
			themeEngine.setTheme(theme.id);
			tminit();
		});

		currentView.appendChild(item);
	});
};

tminit();