import { $, jQuery } from 'https://esm.sh/jquery';
import { projectJS, openApp } from '../jsappapi/latest/main.js';
import { themes } from '../jsappapi/latest/themes.js';
import themeEngine from '../jsappapi/latest/themeEngine.js';
import { dialog } from '../jsappapi/latest/dialog.js';
import { sanitizeText } from '../jsappapi/latest/sanitize.js';
import { deleteWallpaper, createWallpaper } from '../jsappapi/latest/wallpaper.js';
import { apps } from '../jsappapi/latest/apps.js';

const updateCheckBoxes = () => {
	if (document.getElementById("uiTransparency").checked == true) {
		localStorage.uiTransparency = "true";
	} else {
		localStorage.uiTransparency = "false";
	}

	if (document.getElementById("forceWallpaper").checked == true) {
		localStorage.forceWallpaper = "true";
	} else {
		localStorage.forceWallpaper = "false";
	}

	if (document.getElementById("blurWallpaper").checked == true) {
		localStorage.blurWallpaper = "true";
	} else {
		localStorage.blurWallpaper = "false";
	}

	if (document.getElementById("darkenWallpaper").checked == true) {
		localStorage.darkenWallpaper = "true";
	} else {
		localStorage.darkenWallpaper = "false";
	}

	recreateWallpaper()
}

const recreateWallpaper = () => {
	themeEngine.loadTheme();
	if (localStorage.forceWallpaper === "true" && localStorage.wallpaper) {
		createWallpaper(localStorage.wallpaper);
	} else {
		deleteWallpaper();
	}
}

const updateWallpaper = () => {
	if (localStorage.getItem("wallpaperName") !== null) {
		$("#wallpaperName").text("Current Wallpaper: " + localStorage.wallpaperName);
	} else {
		$("#wallpaperName").text("Current Wallpaper: None");
	}

	if (!localStorage.wallpaperSource) {
		$("#getSourceButton").hide();
	} else {
		$("#getSourceButton").show();
	}
}

const importWallpaper = () => {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = '.png,.jpg,.gif,.svg';

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
				clearWallpaper()
			}
			updateWallpaper()
		}

	}
	input.click();
}

export const clearWallpaper = () => {
	localStorage.removeItem("wallpaper");
	localStorage.removeItem("wallpaperName");
	localStorage.removeItem("wallpaperSource");
	updateWallpaper();
	deleteWallpaper()
}

const getSource = () => {
	dialog(`<a href="${localStorage.wallpaperSource}">${localStorage.wallpaperSource}</a>`, "custom", "Image Source")
}

const downloadWallpaper = () => {
	if (localStorage.wallpaper) {
		let title = "";
		if (localStorage.wallpaperSource) {
			title = localStorage.wallpaperName + ".avif";
		} else {
			title = localStorage.wallpaperName;
		}
		dialog(`Download file: <a href="${localStorage.wallpaper}" download>${title}</a><br>Please note that the quality of the source is better.`, "custom", "Download Wallpaper")
	} else {
		dialog("Select a wallpaper first!", "error")
	}
}

const getWallpaperList = async () => {
	try {
		let response = await fetch(`/lib/wallpapers.json`);
		if (response.ok) {
			let json = await response.json();
			renderWallpaperList(json);
		} else {
			console.error(response);
			$("#wallpaperList").append(`${response.status} ${response.statusText}`);
		}
	} catch (e) {
		$("#wallpaperList").append(`${e}`);
	}
}

const renderWallpaperList = (source) => {
	for (let i = 0; i < source.length; i++) {
		let img = source[i];
		let url = `/lib/wallpapers/${img.name}.avif`;
		let thumb = `/lib/wallpapers/thumbnails/${img.name}.avif`;
		let codeName = img.name.replaceAll(" ", "_");
		$("#wallpaperList").append(`<div class="wallpaperItem" id="wallpaperItem${codeName}"></div>`);
		$(`#wallpaperItem${codeName}`).append(`<img src="${thumb}" alt="${img.name}">`);
		$(`#wallpaperItem${codeName}`).append(`<div class="wallpaperOverlay">${img.name}<div class="small">${img.author}</div></div>`);
		$(`#wallpaperItem${codeName}`).on('click', () => {
			localStorage.setItem("wallpaper", url);
			localStorage.setItem("wallpaperName", img.name);
			localStorage.setItem("wallpaperSource", img.source);
			updateWallpaper();
			recreateWallpaper();
		})
	}
}

const resetAll = () => {
	if (confirm("Are you sure? All data will be deleted. This can't be undone.")) {
		localStorage.clear();
		document.write("All data has been successfully deleted.")
	}
}

const restoreHiddenApps = () => {
	localStorage.removeItem('hiddenApps');
	dialog('Restored all hidden apps.', 'info');
}

$("#restoreHiddenAppsButton").on('click', restoreHiddenApps);

$("#editThemeButton").on('click', () => { openApp("themeEditor") });
$("#deleteThemeButton").on('click', () => {
	if (!confirm(`Are you sure you want to delete your custom theme: "${atob(localStorage.theme.slice(12))}"?`)) return;
	localStorage.removeItem(localStorage.theme);
	localStorage.theme = themeEngine.getDefault();
	themeEngine.loadTheme();
	tminit();
});

$("#clearWallpaperButton").on('click', clearWallpaper);
$("#importWallpaperButton").on('click', importWallpaper);
$("#downloadWallpaperButton").on('click', downloadWallpaper);
$("#getSourceButton").on('click', getSource);

$("#resetAllButton").on('click', resetAll);

$("input[type='checkbox']").on('click', updateCheckBoxes);

document.getElementById("uiTransparency").checked = localStorage.uiTransparency == "true";
document.getElementById("forceWallpaper").checked = localStorage.forceWallpaper == "true";
document.getElementById("blurWallpaper").checked = localStorage.blurWallpaper == "true";
document.getElementById("darkenWallpaper").checked = localStorage.darkenWallpaper == "true";
updateWallpaper();

getWallpaperList();

document.getElementById("versionString").innerText = `Version ${projectJS.version}.${projectJS.build}`;
document.getElementById("versionStringJQ").innerText = `jQuery Version ${jQuery().jquery}`;
document.getElementById("appCount").innerText = `Installed Apps: ${apps.length}`;

const tminit = () => {
	const $currentView = $("#themeList");
	$("#deleteThemeButton").hide();
	$currentView.empty();

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

	const $themeElements = allThemes.map(theme => {
		const isActive = theme.id === localStorage.theme;

		const $item = $(`
				<div class="themeItem ${isActive ? 'active' : ''}" title="${theme.name}">
					<div class="theme">
						<div class="preview" style="background: ${theme.background}"></div>
						<div class="preview" style="background: ${theme.accent}"></div>
					</div>
				</div>
			`);

		if (isActive) {
			$("#selectedThemeLabel").text(`Selected theme: ${theme.name}`)
			if (theme.isCustom) {
				$("#deleteThemeButton").show();
			}
		}

		$item.on("mousedown", () => {
			themeEngine.setTheme(theme.id);
			tminit();
		});

		return $item;
	});

	$currentView.append($themeElements);
}

tminit();