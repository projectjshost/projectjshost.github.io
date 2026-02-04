function getRandomStr(length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
	// Declare all characters
	let chars = "";
	if(includeUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if(includeLowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
	if(includeNumbers) chars += "0123456789";
	if(includeSymbols) chars += "!@#$%&";

	// Pick characers randomly
	let str = "";
	while (length--) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
};

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