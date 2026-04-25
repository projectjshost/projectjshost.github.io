import CryptoJS from "https://esm.sh/crypto-js"

export const encryptString = (string, key) => {
	return CryptoJS.AES.encrypt(string, key);
}

export const decryptString = (string, key) => {
	return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
}