import CryptoJS from "https://esm.sh/crypto-js"

export const sha256 = async (arrayBuffer) => {
	const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);

	const hashArray = Array.from(new Uint8Array(hashBuffer));

	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

export const sha256string = async (str) => {
	return await sha256(new TextEncoder().encode(str));
}

export const sha512 = async (arrayBuffer) => {
	const hashBuffer = await crypto.subtle.digest('SHA-512', arrayBuffer);

	const hashArray = Array.from(new Uint8Array(hashBuffer));

	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

export const sha512string = async (str) => {
	return await sha512(new TextEncoder().encode(str));
}

export const md5 = (arrayBuffer) => {
	const uint8Array = new Uint8Array(arrayBuffer);

	const wordArray = CryptoJS.lib.WordArray.create(uint8Array);

	const hash = CryptoJS.MD5(wordArray);

	return hash.toString(CryptoJS.enc.Hex);
}

export const md5string = (str) => {
	return CryptoJS.MD5(str).toString();
}

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