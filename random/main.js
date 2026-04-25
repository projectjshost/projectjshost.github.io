import $ from 'https://esm.sh/jquery';

import { getRandom, getRandomStr } from '../jsappapi/latest/random.js';

function randomPassGen() {
	const passwordLength = document.getElementById("randomPassLen").value;
	const includeUpperCase = document.getElementById("includeUpperCase").checked;
	const includeLowerCase = document.getElementById("includeLowerCase").checked;
	const includeNumbers = document.getElementById("includeNumbers").checked;
	const includeSymbols = document.getElementById("includeSymbols").checked;
	document.getElementById("randomPassResult").innerText = getRandomStr(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);
}

function randomNumGen() {
	const randomNumMin = parseInt(document.getElementById("randomNumMin").value);
	const randomNumMax = parseInt(document.getElementById("randomNumMax").value) + 1;
	const result = getRandom(randomNumMin, randomNumMax);
	document.getElementById("randomNumResult").innerText = result;
}

$("#randomPassGen").on("click", randomPassGen);
$("#randomNumGen").on("click", randomNumGen);