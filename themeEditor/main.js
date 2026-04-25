import $ from 'https://esm.sh/jquery';
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

		$("#currentView").append(editorHTML);

		const $hueSlider = $("#hueSlider");
		const $saturationSlider = $("#saturationSlider");
		const $valueSlider = $("#valueSlider");
		const $hueLabel = $("#hueLabel");
		const $saturationLabel = $("#saturationLabel");
		const $valueLabel = $("#valueLabel");
		const $themeName = $("#themeName");

		const updateLabels = () => {
			$hueLabel.text(`Hue: ${$hueSlider.val()}`);
			$saturationLabel.text(`Saturation: ${$saturationSlider.val()}%`);
			$valueLabel.text(`Brightness: ${$valueSlider.val()}%`);
		};

		const selectedOptionChange = () => {
			const selectedColor = $('input[name="color"]:checked').val();
			const cssVarValue = getComputedStyle(documentRoot).getPropertyValue(`--${selectedColor}`).trim();
			const currentColor = color(cssVarValue).hsl();

			$hueSlider.val(currentColor.color[0]);
			$saturationSlider.val(currentColor.color[1]);
			$valueSlider.val(currentColor.color[2]);

			updateLabels();
		};

		const sliderChange = () => {
			const selectedColor = $('input[name="color"]:checked').val();
			const currentColor = color.hsl([
				parseInt($hueSlider.val()),
				parseInt($saturationSlider.val()),
				parseInt($valueSlider.val())
			]);

			documentRoot.style.setProperty(`--${selectedColor}`, currentColor);
			updateLabels();
		};

		const saveTheme = () => {
			const name = $themeName.val().slice(0, 32) || "Untitled";

			const content = {};
			THEME_COLORS.forEach(c => {
				content[c.id] = getComputedStyle(documentRoot).getPropertyValue(`--${c.id}`).trim();
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
				$themeName.val(atob(localStorage.theme.slice(12)));
			} catch (e) {
				console.warn("Could not decode theme name.");
			}
		}

		$('#currentView').on('input', 'input[name="color"]', selectedOptionChange);
		$hueSlider.add($saturationSlider).add($valueSlider).on('input', sliderChange);

		$("#saveButton").on('mousedown', saveTheme);
		$themeName.on('keyup', (e) => {
			if (e.key === 'Enter') saveTheme();
		});
	}
};

themeEditor.init();

$("#backButton").on("click", () => {
	openApp("settings");
});