import { encryptString, decryptString } from '../jsappapi/latest/crypto.js';

// Encrypt with password
const encryptWithPassword = () => {
	let textToEncrypt = document.getElementById("textpass").value;
	let encryptionPassword = document.getElementById("pass").value;
	let encryptedText = encryptString(textToEncrypt, encryptionPassword);
	document.getElementById('ResultPass').innerHTML = encryptedText;
	clearPassword();
}

// Decrypt with password
const decryptWithPassword = () => {
	let textToDecrypt = document.getElementById("textpass").value;
	let decryptionPassword = document.getElementById("pass").value;
	let decryptedText = decryptString(textToDecrypt, decryptionPassword);
	document.getElementById('ResultPass').innerHTML = decryptedText;
	clearPassword();
}

const clearPassword = () => {
	document.getElementById("textpass").value = "";
}

document.getElementById("encryptButton").addEventListener("click", encryptWithPassword);
document.getElementById("decryptButton").addEventListener("click", decryptWithPassword);