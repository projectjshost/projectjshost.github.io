/**
 * Generates a random integer between a minimum (inclusive) and maximum (exclusive) value.
 *
 * @param {number} min - The lower bound (inclusive).
 * @param {number} max - The upper bound (exclusive).
 * @returns {number} A random integer within the specified range.
 */
export const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Generates a random string of a specified length using selected character types.
 *
 * @param {number} length - The length of the string to generate.
 * @param {boolean} includeUpperCase - Whether to include uppercase letters (A-Z).
 * @param {boolean} includeLowerCase - Whether to include lowercase letters (a-z).
 * @param {boolean} includeNumbers - Whether to include digits (0-9).
 * @param {boolean} includeSymbols - Whether to include special characters (!@#$%&).
 * @returns {string} The randomly generated string.
 */
export const getRandomStr = (length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) => {
	let chars = "";
	if (includeUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (includeLowerCase) chars += "abcdefghijklmnopqrstuvwxyz";
	if (includeNumbers) chars += "0123456789";
	if (includeSymbols) chars += "!@#$%&";

	let str = "";
	while (length--) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
};