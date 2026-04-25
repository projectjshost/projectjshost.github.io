import $ from 'https://esm.sh/jquery';
import { encryptString, decryptString } from '../jsappapi/latest/crypto.js';

// Encrypt with password
const SafeEncryptPass = () => {
	let encryptThis = document.getElementById("textpass").value;
	let ENpassword = document.getElementById("pass").value;
	let encrypted = encryptString(encryptThis, ENpassword);
	document.getElementById('ResultPass').innerHTML = encrypted;
	secureDelete();
}

// Decrypt with password
const SafedecryptPass = () => {
	let decryptThis = document.getElementById("textpass").value;
	let DEpassword = document.getElementById("pass").value;
	let decrypted = decryptString(decryptThis, DEpassword);
	document.getElementById('ResultPass').innerHTML = decrypted;
	secureDelete();
}

const secureDelete = () => {
	document.getElementById("textpass").value = "";
}

$("#encryptButton").on("click", SafeEncryptPass);
$("#decryptButton").on("click", SafedecryptPass);
