import { themes } from "./themes.js";

import { shouldDrawWallpaper } from './wallpaper.js';

export default {

	parseHSL(hslString) {
		// Use a regex to find all numbers (including decimals)
		const matches = hslString.match(/\d+(\.\d+)?/g);

		// Map the string matches to Numbers and take the first three (H, S, L)
		return matches ? matches.slice(0, 3).map(Number) : [];
	},

	getDefault() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return "epilogue";
		} else {
			return "epiloguelight"
		}
	},

	loadTheme(name) {
		if (typeof name === "undefined") {
			if (localStorage.theme) {
				name = localStorage.theme;
			} else {
				name = this.getDefault();
			}
		}
		document.querySelector(':root').removeAttribute('style');
		let themeObject = themes[name];
		if (name.substring(0, 12) == "customTheme_") {
			themeObject = JSON.parse(localStorage.getItem(name));
		}
		this.loadFromJSON(themeObject);
	},

	loadFromJSON(json) {
		const uiTransparency = shouldDrawWallpaper() && localStorage.uiTransparency === "true";
		const documentRoot = document.querySelector(':root');
		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			try {
				let value = json[prop];
				if (!uiTransparency) {
					documentRoot.style.setProperty(`--${prop}`, value);
					return;
				}
				const c = this.parseHSL(value);
				if (prop === "background-color") {
					value = `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, 0.5)`;
				}
				if (prop === "area-background-color") {
					value = `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, 0.75)`;
				}
				if (prop === "button-color") {
					value = `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, 0.5)`;
				}
				documentRoot.style.setProperty(`--${prop}`, value);

			} catch (error) {
				console.error(error)
			}
		});

		if (uiTransparency) {
			documentRoot.style.setProperty(`--backdrop-filter`, "blur(20px)");
		}
	},

	setTheme(name) {
		if (name !== localStorage.theme) {
			if (typeof name == "undefined") {
				name = this.getDefault();
			}
			localStorage.theme = name;
			this.loadTheme(name);
		}
	}
}