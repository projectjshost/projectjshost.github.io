import CryptoJS from "https://esm.sh/crypto-js";

/**
 * Encrypts a plain text string using AES encryption.
 *
 * @param {string} string - The plain text string to encrypt.
 * @param {string} key - The secret key used for encryption.
 * @returns {CryptoJS.lib.CipherParams} The AES encrypted CipherParams object (can be cast to string for Base64 format).
 */
export const encryptString = (string, key) => {
	return CryptoJS.AES.encrypt(string, key);
};

/**
 * Decrypts an AES encrypted string back into plain text.
 *
 * @param {string} string - The encrypted string (Base64 encoded) to decrypt.
 * @param {string} key - The secret key used during encryption.
 * @returns {string} The decrypted UTF-8 plain text string.
 */
export const decryptString = (string, key) => {
	return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
};