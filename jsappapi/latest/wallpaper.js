import $ from 'https://esm.sh/jquery';

export let wallpaperCreated = false;

// Sets Wallpaper of App
export const createWallpaper = (source) => {
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

export const deleteWallpaper = () => {
	wallpaperCreated = false;
	$("#wallpaper").remove()
	$("#wallpaperElement").remove()
}