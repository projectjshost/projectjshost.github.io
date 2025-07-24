// Project JS Calculator App
const display = document.getElementById('display');
const π = 3.14592;
let lastresult = 0;
let dispInit = true;

const calculate = (operation) => {
	let result;
	try {
		result = eval(operation);
	} catch (error) {}

	if (result === 0 || isFinite(result) && Boolean(result)) {
		display.innerText = result;
		lastresult = result;
	} else {
		display.innerText = 'Error';
	}
	dispInit = true;
}

const addChar = (character) => {
	if (dispInit == true) {
		display.innerText = character;
	} else {
		display.innerText += character;
	}
	dispInit = false;
}

const backspace = () => {
	if (display.innerText.length > 1) {
		display.innerText = display.innerText.slice(0, -1);
	} else {
		AC()
	}
}

const AC = () => {
	display.innerText = '0';
	dispInit = true;
}