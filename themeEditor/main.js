const themeEditor = {
	init: () => {
		// const color = require('color')
		const documentRoot = document.querySelector(':root');

		const selectedOptionChange = () => {
			const selectedColor = document.querySelector('input[name="color"]:checked').value;
			const currentColor = color(getComputedStyle(documentRoot).getPropertyValue(`--${selectedColor}`).replaceAll(" ","")).hsl();
			hueSlider.value=currentColor.color[0];
			saturationSlider.value=currentColor.color[1];
			valueSlider.value=currentColor.color[2];
			updateLabels()
		}
		
		const sliderChange = () => {
			const selectedColor = document.querySelector('input[name="color"]:checked').value;
			const currentColor = color.hsl([parseInt(hueSlider.value), parseInt(saturationSlider.value), parseInt(valueSlider.value)]);
			documentRoot.style.setProperty(`--${selectedColor}`, currentColor);
			updateLabels()
		}

		const updateLabels = () => {
			$("#hueLabel").text(`Hue: ${hueSlider.value}`);
			$("#saturationLabel").text(`Saturation: ${saturationSlider.value}%`);
			$("#valueLabel").text(`Brightness: ${valueSlider.value}%`);
		}
		
		// Area
		$("#currentView").append(`<div id="themeEditor" class="area"></div>`);
		$("#themeEditor").append(`<h2><i data-feather="edit-2"></i>Edit colors</h2>`);
		// Color options
		$("#themeEditor").append(`<div id="colorSelect"></div>`);
		$("#colorSelect").append(`<div id="demoBoxes"></div>`);
			$("#demoBoxes").append(`<div class="demoBox background"></div>`);
			$("#demoBoxes").append(`<div class="demoBox background2"></div>`);
			$("#demoBoxes").append(`<div class="demoBox foreground"></div>`);
			$("#demoBoxes").append(`<div class="demoBox foreground2"></div>`);
			$("#demoBoxes").append(`<div class="demoBox border"></div>`);
			$("#demoBoxes").append(`<div class="demoBox element"></div>`);
			$("#demoBoxes").append(`<div class="demoBox active"></div>`);
			$("#demoBoxes").append(`<div class="demoBox accent"></div>`);
		$("#colorSelect").append(`<div id="colorOptions"></div>`);

		$("#colorOptions").append(`<input name="color" type="radio" id="option_background" value="background" checked="checked">`);
		$("#colorOptions").append(`<label for="option_background">App background</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_background2" value="background2">`);
		$("#colorOptions").append(`<label for="option_background2">Content background</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_foreground" value="foreground">`);
		$("#colorOptions").append(`<label for="option_foreground">Main text</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_foreground2" value="foreground2">`);
		$("#colorOptions").append(`<label for="option_foreground2">Normal text</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_border" value="border">`);
		$("#colorOptions").append(`<label for="option_border">Borders</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_element" value="element">`);
		$("#colorOptions").append(`<label for="option_element">Elements</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_active" value="active">`);
		$("#colorOptions").append(`<label for="option_active">Pressed elements</label><br>`);
		
		$("#colorOptions").append(`<input name="color" type="radio" id="option_accent" value="accent">`);
		$("#colorOptions").append(`<label for="option_accent">Accent</label><br>`);
		
		// HSV Sliders
		$("#themeEditor").append(`<p2 id="hueLabel"></p2><br>`);
		$("#themeEditor").append(`<input type="range" min="0" max="359" id="hueSlider"></input><br>`);
		$("#themeEditor").append(`<p2 id="saturationLabel"></p2><br>`);
		$("#themeEditor").append(`<input type="range" min="0" max="100" id="saturationSlider"></input><br>`);
		$("#themeEditor").append(`<p2 id="valueLabel"></p2><br>`);
		$("#themeEditor").append(`<input type="range" min="0" max="100" id="valueSlider"></input>`);
		const hueSlider = document.getElementById("hueSlider");
		const saturationSlider = document.getElementById("saturationSlider");
		const valueSlider = document.getElementById("valueSlider");
		selectedOptionChange()
		
		$(`input[name="color"]`).on('input', () => { 
			selectedOptionChange()
		});
		
		$(`#hueSlider, #saturationSlider, #valueSlider`).on('input', () => { 
			sliderChange()
		});
		const saveTheme = () => {
			const name = document.getElementById("themeName").value.slice(0,32);
			const content = {
				"background": getComputedStyle(documentRoot).getPropertyValue(`--background`),
				"background2": getComputedStyle(documentRoot).getPropertyValue(`--background2`),
				"foreground": getComputedStyle(documentRoot).getPropertyValue(`--foreground`),
				"foreground2": getComputedStyle(documentRoot).getPropertyValue(`--foreground2`),
				"border": getComputedStyle(documentRoot).getPropertyValue(`--border`),
				"element": getComputedStyle(documentRoot).getPropertyValue(`--element`),
				"active": getComputedStyle(documentRoot).getPropertyValue(`--active`),
				"accent": getComputedStyle(documentRoot).getPropertyValue(`--accent`),
			}
			try {
				localStorage.setItem(`customTheme_${btoa(name)}`, JSON.stringify(content).replaceAll(" ",""))
			}
			catch (err) {
				dialog(err.toString(), "error");
			}
			themeEngine.setTheme(`customTheme_${btoa(name)}`);
			openApp('themeManager')
		}
		// Theme Saving
		$("#currentView").append(`<div id="saveTheme" class="area"></div>`);
		$("#saveTheme").append(`<h2><i data-feather="save"></i>Save theme</h2>`);
		$("#saveTheme").append(`<div class="combiBarContainer"><input id="themeName" type="text" spellcheck="false" placeholder="Theme name"></input><button id="saveButton" class="main"><span class="icon">done</span>Save</button></div>`);
		if(localStorage.theme.substring(0, 12) == "customTheme_") {
			document.getElementById("themeName").value=atob(localStorage.theme.slice(12))
		}
		$("#saveTheme>.combiBarContainer>#saveButton").on('mousedown', () => {
			saveTheme()
		});
		$("#themeName").on('keyup', (e) => {
			if (e.key === 'Enter') {
				saveTheme()
			}
		});
	}
}
$(document).ready(() =>{
	themeEditor.init()
})
