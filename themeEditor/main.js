import color from 'https://esm.sh/color';

import { openApp } from '../jsappapi/latest/main.js';
import { dialog } from '../jsappapi/latest/dialog.js';
import themeEngine from '../jsappapi/latest/themeEngine.js';

const THEME_COLORS = [
	{ id: 'background-color', label: 'App background' },
	{ id: 'area-background-color', label: 'Content background' },
	{ id: 'title-color', label: 'Title text' },
	{ id: 'text-color', label: 'Normal text' },
	{ id: 'border-color', label: 'Borders' },
	{ id: 'button-color', label: 'Elements' },
	{ id: 'accent-color', label: 'Accent' },
];

const themeEditor = {
	init: () => {
		const documentRoot = document.documentElement;

		const editorHTML = `
			<div id="themeEditor" class="area">
				<h2>Edit colors</h2>
				<div id="colorSelect">
					<div id="demoBoxes">
						${THEME_COLORS.map(c => `<div class="demoBox ${c.id}"></div>`).join('')}
					</div>
					<div id="colorOptions">
						${THEME_COLORS.map((c, i) => `
							<input name="color" type="radio" id="option_${c.id}" value="${c.id}" ${i === 0 ? 'checked' : ''}>
							<label for="option_${c.id}">${c.label}</label><br>
						`).join('')}
					</div>
				</div>
				
				<p2 id="hueLabel" class="slider-label"></p2><br>
				<input type="range" min="0" max="359" id="hueSlider"><br>
				
				<p2 id="saturationLabel" class="slider-label"></p2><br>
				<input type="range" min="0" max="100" id="saturationSlider"><br>
				
				<p2 id="valueLabel" class="slider-label"></p2><br>
				<input type="range" min="0" max="100" id="valueSlider">
			</div>
			
			<div id="saveTheme" class="area">
				<h2>Save theme</h2>
				<div class="combiBarContainer">
					<input id="themeName" type="text" spellcheck="false" placeholder="Theme name">
					<button id="saveButton" class="main">
						<span class="icon">done</span>Save
					</button>
				</div>
			</div>
		`;

		const currentView = document.querySelector("#currentView");
		if (currentView) {
			currentView.insertAdjacentHTML('beforeend', editorHTML);
		}

		const hueSlider = document.querySelector("#hueSlider");
		const saturationSlider = document.querySelector("#saturationSlider");
		const valueSlider = document.querySelector("#valueSlider");
		const hueLabel = document.querySelector("#hueLabel");
		const saturationLabel = document.querySelector("#saturationLabel");
		const valueLabel = document.querySelector("#valueLabel");
		const themeName = document.querySelector("#themeName");
		const saveButton = document.querySelector("#saveButton");

		const updateLabels = () => {
			hueLabel.textContent = `Hue: ${hueSlider.value}`;
			saturationLabel.textContent = `Saturation: ${saturationSlider.value}%`;
			valueLabel.textContent = `Brightness: ${valueSlider.value}%`;
		};

		const selectedOptionChange = () => {
			const selectedInput = document.querySelector('input[name="color"]:checked');
			if (!selectedInput) return;

			const selectedColor = selectedInput.value;
			const cssVarValue = getComputedStyle(documentRoot).getPropertyValue(`--${selectedColor}`).trim();
			// Strip alpha when reading current value
			const currentColor = color(cssVarValue).alpha(1).hsl();

			hueSlider.value = currentColor.color[0];
			saturationSlider.value = currentColor.color[1];
			valueSlider.value = currentColor.color[2];

			updateLabels();
		};

		const sliderChange = () => {
			const selectedInput = document.querySelector('input[name="color"]:checked');
			if (!selectedInput) return;

			const selectedColor = selectedInput.value;
			const currentColor = color.hsl([
				parseInt(hueSlider.value, 10),
				parseInt(saturationSlider.value, 10),
				parseInt(valueSlider.value, 10)
			]).alpha(1); // Ensure alpha is 1

			// Force HSL string format
			documentRoot.style.setProperty(`--${selectedColor}`, currentColor.hsl().string());
			updateLabels();
		};

		const saveTheme = () => {
			const name = themeName.value.slice(0, 32) || "Untitled";

			const content = {};
			THEME_COLORS.forEach(c => {
				const rawVal = getComputedStyle(documentRoot).getPropertyValue(`--${c.id}`).trim();
				// Ensure saved value is converted back to pure HSL string (ignores browser RGB conversion)
				content[c.id] = color(rawVal).alpha(1).hsl().string();
			});

			try {
				const safeNameBase64 = btoa(name);
				const storageKey = `customTheme_${safeNameBase64}`;

				localStorage.setItem(storageKey, JSON.stringify(content).replace(/\s/g, ""));
				themeEngine.setTheme(storageKey);
				openApp('settings');
			} catch (err) {
				console.error(err);
				dialog(err.toString(), "error");
			}
		};

		selectedOptionChange();

		if (localStorage.theme?.startsWith("customTheme_")) {
			try {
				themeName.value = atob(localStorage.theme.slice(12));
			} catch (e) {
				console.warn("Could not decode theme name.");
			}
		}

		// Delegated listener on container for radio inputs
		currentView?.addEventListener('input', (e) => {
			if (e.target.matches('input[name="color"]')) {
				selectedOptionChange();
			}
		});

		// Attach slider listeners
		[hueSlider, saturationSlider, valueSlider].forEach(slider => {
			slider?.addEventListener('input', sliderChange);
		});

		saveButton?.addEventListener('mousedown', saveTheme);
		themeName?.addEventListener('keyup', (e) => {
			if (e.key === 'Enter') saveTheme();
		});
	}
};

themeEditor.init();

document.querySelector("#backButton")?.addEventListener("click", () => {
	openApp("settings");
});