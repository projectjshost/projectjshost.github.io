import CryptoJS from "https://esm.sh/crypto-js"

/**
 * Calculates the SHA-256 hash of a given ArrayBuffer using the Web Crypto API.
 *
 * @param {ArrayBuffer} arrayBuffer - The binary data buffer to hash.
 * @returns {Promise<string>} A promise that resolves to the SHA-256 hash as a hex string.
 */
export const sha256 = async (arrayBuffer) => {
	const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);

	const hashArray = Array.from(new Uint8Array(hashBuffer));

	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Calculates the SHA-256 hash of a string.
 *
 * @param {string} str - The string to hash.
 * @returns {Promise<string>} A promise that resolves to the SHA-256 hash as a hex string.
 */
export const sha256string = async (str) => {
	return await sha256(new TextEncoder().encode(str));
}

/**
 * Calculates the SHA-512 hash of a given ArrayBuffer using the Web Crypto API.
 *
 * @param {ArrayBuffer} arrayBuffer - The binary data buffer to hash.
 * @returns {Promise<string>} A promise that resolves to the SHA-512 hash as a hex string.
 */
export const sha512 = async (arrayBuffer) => {
	const hashBuffer = await crypto.subtle.digest('SHA-512', arrayBuffer);

	const hashArray = Array.from(new Uint8Array(hashBuffer));

	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

/**
 * Calculates the SHA-512 hash of a string.
 *
 * @param {string} str - The string to hash.
 * @returns {Promise<string>} A promise that resolves to the SHA-512 hash as a hex string.
 */
export const sha512string = async (str) => {
	return await sha512(new TextEncoder().encode(str));
}

/**
 * Calculates the MD5 hash of an ArrayBuffer using CryptoJS.
 *
 * @param {ArrayBuffer} arrayBuffer - The binary data buffer to hash.
 * @returns {string} The MD5 hash as a hex string.
 */
export const md5 = (arrayBuffer) => {
	const uint8Array = new Uint8Array(arrayBuffer);

	const wordArray = CryptoJS.lib.WordArray.create(uint8Array);

	const hash = CryptoJS.MD5(wordArray);

	return hash.toString(CryptoJS.enc.Hex);
}

/**
 * Calculates the MD5 hash of a string using CryptoJS.
 *
 * @param {string} str - The string to hash.
 * @returns {string} The MD5 hash as a hex string.
 */
export const md5string = (str) => {
	return CryptoJS.MD5(str).toString();
}

/**
 * Generates a 53-bit hash for a given string (cyrb53 algorithm).
 * Useful for fast non-cryptographic hashing (e.g., hash tables, cache keys).
 *
 * @param {string} str - The string to hash.
 * @param {number} [seed=0] - Optional seed value.
 * @returns {number} A 53-bit positive integer hash.
 */
export const cyrb53string = (str, seed = 0) => {
	let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
	h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
	h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};