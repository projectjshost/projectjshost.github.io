import { themes } from "./themes.js";

export default {
	default: "epilogue",

	loadTheme(name) {
		if (typeof name === "undefined") {
			if (localStorage.theme) {
				name = localStorage.theme;
			} else {
				name = this.default;
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
		const documentRoot = document.querySelector(':root');
		const props = ["background-color", "area-background-color", "title-color", "text-color", "border-color", "button-color", "accent-color"];

		props.forEach(prop => {
			try {
				documentRoot.style.setProperty(`--${prop}`, json[prop]);
			} catch (error) {
				console.error(error)
			}
		});
	},

	setTheme(name) {
		if (name !== localStorage.theme) {
			if (typeof name == "undefined") {
				name = this.default;
			}
			localStorage.theme = name;
			this.loadTheme(name);
		}
	}
}