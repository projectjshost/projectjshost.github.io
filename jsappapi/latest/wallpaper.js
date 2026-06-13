import $ from 'https://esm.sh/jquery';

import { projectJS, isWindowed } from './main.js';

export const shouldDrawWallpaper = () => {
	return (location.pathname == `/${projectJS.launcher}/` | localStorage.forceWallpaper === "true") && localStorage.wallpaper;
}

// Sets Wallpaper of App
export const createWallpaper = (source) => {
	if (!shouldDrawWallpaper() || isWindowed) return;
	$("#wallpaper").remove();
	$("#wallpaperElement").remove();
	$('html').append(`<div id="wallpaperElement"></div>`)
	if (localStorage.blurWallpaper == "true") {
		$('#wallpaperElement').addClass('blur');
	}
	if (localStorage.darkenWallpaper == "true") {
		$('#wallpaperElement').addClass('dark');
	}

	$('head').append(`<style id="wallpaper">#wallpaperElement{background-image:url("` + source + `")!important}body{background:transparent!important}</style>`)
}

export const deleteWallpaper = () => {
	$("#wallpaper").remove();
	$("#wallpaperElement").remove();
}