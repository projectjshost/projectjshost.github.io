import { isWindowed } from "./main.js";
import { themes } from "./themes.js";
import { shouldDrawWallpaper } from './wallpaper.js';
import { getImageColor } from './imageColor.js';

/**
 * Represents the structure of CSS custom properties in a theme object.
 * @typedef {Object} ThemeObject
 * @property {string} [background-color] - Main background color (HSL/HEX/RGB format).
 * @property {string} [area-background-color] - Container/panel background color.
 * @property {string} [title-color] - Header and title text color.
 * @property {string} [text-color] - Body text color.
 * @property {string} [border-color] - Component border color.
 * @property {string} [button-color] - Button background color.
 * @property {string} [accent-color] - UI accent color.
 */

export default {
	/**
	 * Determines the default theme name based on the system's preferred color scheme.
	 * 
	 * @returns {string} The default theme name ('epilogue' for dark mode, 'epiloguelight' for light mode).
	 */
	getDefault() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? "epilogue"
			: "epiloguelight";
	},

	/**
	 * Loads and applies a theme by name, dynamically generated wallpaper colors, or custom local storage theme.
	 * 
	 * @param {string} [name] - Optional name of the theme to load. Defaults to stored theme or system preference.
	 * @returns {Promise<void>} Resolves once theme styling has been computed and applied.
	 */
	async loadTheme(name) {
		name = name || localStorage.theme || this.getDefault();

		document.querySelector(':root').removeAttribute('style');

		if (name === "wallpaper") {
			const color = await getImageColor(localStorage.wallpaper);
			const hue = color.hue;
			const isDark = color.isDark;

			/** @type {ThemeObject} */
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

		/** @type {ThemeObject} */
		let themeObject = name.startsWith("customTheme_")
			? JSON.parse(localStorage.getItem(name))
			: themes[name];

		this.loadFromJSON(themeObject);
	},

	/**
	 * Applies CSS variables to the document root based on the provided theme JSON object.
	 * Handles conditional transparency and backdrop-filter (blur) settings.
	 * 
	 * @param {ThemeObject} json - Object containing key-value pairs of theme properties and CSS color values.
	 * @returns {void}
	 */
	loadFromJSON(json) {
		const uiTransparency = localStorage.uiTransparency === "true" && (isWindowed || shouldDrawWallpaper());
		const documentRoot = document.querySelector(':root');

		/** @type {Array<keyof ThemeObject>} */
		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			if (json[prop]) documentRoot.style.setProperty(`--${prop}`, json[prop]);
		});

		const opacity = localStorage.opacity ?? 50;

		/** @type {Array<{ prop: keyof ThemeObject, opacity: number|string }>} */
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

	/**
	 * Sets and saves the active theme to `localStorage`, then triggers its loading.
	 * 
	 * @param {string} [name] - The theme name to persist and apply.
	 * @returns {void}
	 */
	setTheme(name) {
		if (name !== localStorage.theme) {
			name = name || this.getDefault();
			localStorage.theme = name;
			this.loadTheme(name);
		}
	}
}