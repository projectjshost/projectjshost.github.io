import { themes } from "./themes.js";
import { shouldDrawWallpaper } from './wallpaper.js';

export default {
	getDefault() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? "epilogue"
			: "epiloguelight";
	},

	loadTheme(name) {
		name = name || localStorage.theme || this.getDefault();

		document.querySelector(':root').removeAttribute('style');

		let themeObject = name.startsWith("customTheme_")
			? JSON.parse(localStorage.getItem(name))
			: themes[name];

		this.loadFromJSON(themeObject);
	},

	loadFromJSON(json) {
		const uiTransparency = shouldDrawWallpaper() && localStorage.uiTransparency === "true";
		const documentRoot = document.querySelector(':root');

		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			if (json[prop]) documentRoot.style.setProperty(`--${prop}`, json[prop]);
		});

		const transparentProps = [
			{ prop: "background-color", opacity: "50%" },
			{ prop: "area-background-color", opacity: "75%" },
			{ prop: "button-color", opacity: "50%" }
		];

		if (uiTransparency) {
			const radius = localStorage.blurRadius ?? 20;
			documentRoot.style.setProperty('--backdrop-filter', `blur(${radius}px)`);

			transparentProps.forEach(({ prop, opacity }) => {
				documentRoot.style.setProperty(
					`--${prop}-transparent`,
					`color-mix(in srgb, ${json[prop]} ${opacity}, transparent)`
				);
			});
		} else {
			documentRoot.style.removeProperty('--backdrop-filter');

			transparentProps.forEach(({ prop }) => {
				documentRoot.style.setProperty(`--${prop}-transparent`, json[prop]);
			});
		}
	},

	setTheme(name) {
		if (name !== localStorage.theme) {
			name = name || this.getDefault();
			localStorage.theme = name;
			this.loadTheme(name);
		}
	}
}