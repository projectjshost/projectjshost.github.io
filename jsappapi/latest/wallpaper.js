import { projectJS, isWindowed } from './main.js';

export const shouldDrawWallpaper = () => {
	const isCorrectPath = location.pathname === `/${projectJS.launcher}/`;
	const isForced = localStorage.getItem('forceWallpaper') === 'true';
	const hasWallpaper = Boolean(localStorage.getItem('wallpaper'));

	return (isCorrectPath || isForced) && hasWallpaper;
};

export const deleteWallpaper = () => {
	document.getElementById('wallpaperElement')?.remove();
	document.body.classList.remove('has-wallpaper');
};

export const createWallpaper = (source) => {
	if (!shouldDrawWallpaper() || isWindowed) {
		deleteWallpaper();
		return;
	}

	let element = document.getElementById('wallpaperElement');
	if (!element) {
		element = document.createElement('div');
		element.id = 'wallpaperElement';
		document.body.appendChild(element);
	}

	element.classList.toggle('blur', localStorage.getItem('blurWallpaper') === 'true');
	element.classList.toggle('dark', localStorage.getItem('darkenWallpaper') === 'true');
	element.style.backgroundImage = `url("${source}")`;

	document.body.classList.add('has-wallpaper');
};