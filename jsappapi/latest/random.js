export const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomStr = (length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) => {
	// Declare all characters
	let chars = "";
	if (includeUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (includeLowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
	if (includeNumbers) chars += "0123456789";
	if (includeSymbols) chars += "!@#$%&";

	// Pick characers randomly
	let str = "";
	while (length--) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
};
