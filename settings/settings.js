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

	if (document.getElementById("uiShadows").checked == true) {
		localStorage.uiShadows = "true";
	} else {
		localStorage.uiShadows = "false";
	}
	recreateWallpaper()
	getUiShadows()
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
			} catch (err) {
				dialog(err.message, "error");
				clearWallpaper()
			}
			updateWallpaper()
		}

	}
	input.click();
}

function clearWallpaper() {
	localStorage.removeItem("wallpaper");
	localStorage.removeItem("wallpaperName");
	updateWallpaper();
	deleteWallpaper()
}

function resetAll() {
	var resetAlld = confirm("Are you sure? This can't be undone.");
	if (resetAlld == true) {
		localStorage.clear();
		document.write("All data has been successfully deleted.")
	}
}

document.getElementById("forceWallpaper").checked = localStorage.forceWallpaper=="true";
document.getElementById("blurWallpaper").checked = localStorage.blurWallpaper=="true";
document.getElementById("uiShadows").checked = localStorage.uiShadows=="true";
updateWallpaper()