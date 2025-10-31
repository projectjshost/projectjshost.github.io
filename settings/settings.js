const updateCheckBoxes = () => {
	if (document.getElementById("forceWallpaper").checked == true) {
		localStorage.forceWallpaper = "true";
		createWallpaper(localStorage.wallpaper)
	} else {
		localStorage.forceWallpaper = "false";
		deleteWallpaper()
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
	if(wallpaperCreated) {
		deleteWallpaper()
		createWallpaper(localStorage.wallpaper)
	}
}

const updateWallpaper = () => {
	if (localStorage.getItem("wallpaperName") !== null) {
		$("#wallpaperName").text("Current Wallpaper: " + localStorage.wallpaperName);
	} else {
		$("#wallpaperName").text("Current Wallpaper: None");
	}

	if(!localStorage.wallpaperSource) {
		$("#getSource").hide();
	} else {
		$("#getSource").show();
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

const clearWallpaper = () => {
	localStorage.removeItem("wallpaper");
	localStorage.removeItem("wallpaperName");
	localStorage.removeItem("wallpaperSource");
	updateWallpaper();
	deleteWallpaper()
}

const getSource = () => {
	dialog(`<a href="${localStorage.wallpaperSource}">${localStorage.wallpaperSource}</a>`,"custom","Image Source")
}

const downloadWallpaper = () => {
	if(localStorage.wallpaper) {
		let title = "";
		if(localStorage.wallpaperSource) {
			title = localStorage.wallpaperName + ".jpg";
		} else {
			title = localStorage.wallpaperName;
		}
		dialog(`Download file: <a href="${localStorage.wallpaper}" download>${title}</a><br>Please note that the quality of the source is better.`,"custom","Download Wallpaper")
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
	for(let i = 0; i<source.length; i++) {
		let img = source[i];
		let url = `/lib/wallpapers/${img.name}.jpg`;
		let thumb = `/lib/wallpapers/thumbnails/${img.name}.jpg`;
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
	if (confirm("Are you sure? This can't be undone.")) {
		localStorage.clear();
		document.write("All data has been successfully deleted.")
	}
}

document.getElementById("forceWallpaper").checked = localStorage.forceWallpaper=="true";
document.getElementById("blurWallpaper").checked = localStorage.blurWallpaper=="true";
document.getElementById("darkenWallpaper").checked = localStorage.darkenWallpaper=="true";
updateWallpaper()

getWallpaperList();

document.getElementById("versionString").innerText = `Version ${projectJS.version}.${projectJS.build}`;