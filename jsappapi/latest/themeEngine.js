import { isWindowed } from "./main.js";
import { themes } from "./themes.js";
import { shouldDrawWallpaper } from './wallpaper.js';
import { getImageColor } from './imageColor.js';

export default {
	getDefault() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? "epilogue"
			: "epiloguelight";
	},

	async loadTheme(name) {
		name = name || localStorage.theme || this.getDefault();

		document.querySelector(':root').removeAttribute('style');

		if (name === "wallpaper") {
			const color = await getImageColor(localStorage.wallpaper);
			const hue = color.hue;
			const isDark = color.isDark;

			let themeObject;

			if (isDark) {
				themeObject = {
					"background-color": `hsl(${hue}, 22%, 10%)`,
					"area-background-color": `hsl(${hue}, 23%, 15%)`,
					"title-color": `hsl(${hue}, 50%, 91%)`,
					"text-color": `hsl(${hue}, 15%, 61%)`,
					"border-color": `hsl(${hue}, 15%, 28%)`,
					"button-color": `hsl(${hue}, 22%, 20%)`,
					"accent-color": `hsl(${hue}, 55%, 83%)`
				}
			} else {
				themeObject = {
					"background-color": `hsl(${hue}, 22%, 95%)`,
					"area-background-color": `hsl(${hue}, 22%, 90%)`,
					"title-color": `hsl(${hue}, 50%, 15%)`,
					"text-color": `hsl(${hue}, 25%, 35%)`,
					"border-color": `hsl(${hue}, 20%, 75%)`,
					"button-color": `hsl(${hue}, 22%, 83%)`,
					"accent-color": `hsl(${hue}, 55%, 45%)`
				}
			}

			this.loadFromJSON(themeObject);
			return;
		}

		let themeObject = name.startsWith("customTheme_")
			? JSON.parse(localStorage.getItem(name))
			: themes[name];

		this.loadFromJSON(themeObject);
	},

	loadFromJSON(json) {
		const uiTransparency = localStorage.uiTransparency === "true" && (isWindowed || shouldDrawWallpaper());
		const documentRoot = document.querySelector(':root');

		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			if (json[prop]) documentRoot.style.setProperty(`--${prop}`, json[prop]);
		});

		const opacity = localStorage.opacity ?? 50;

		const transparentProps = [
			{ prop: "background-color", opacity },
			{ prop: "area-background-color", opacity },
			{ prop: "button-color", opacity }
		];

		if (uiTransparency) {
			const radius = localStorage.blurRadius ?? 20;
			documentRoot.style.setProperty('--blur-radius', `${radius}px`);
			documentRoot.style.setProperty('--backdrop-filter', `blur(var(--blur-radius))`);

			transparentProps.forEach(({ prop, opacity }) => {
				documentRoot.style.setProperty(
					`--${prop}-transparent`,
					`color-mix(in srgb, ${json[prop]} ${opacity}%, transparent)`
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