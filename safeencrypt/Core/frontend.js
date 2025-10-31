// Encrypt with password
const SafeEncryptPass = () => {
	let encryptThis = document.getElementById("textpass").value;
	let ENpassword = document.getElementById("pass").value;
	let encrypted = CryptoJS.AES.encrypt(encryptThis, ENpassword);
	document.getElementById('ResultPass').innerHTML = encrypted;
	secureDelete();
}

// Decrypt with password
const SafedecryptPass = () => {
	let decryptThis = document.getElementById("textpass").value;
	let DEpassword = document.getElementById("pass").value;
	let decrypted = CryptoJS.AES.decrypt(decryptThis, DEpassword);
	document.getElementById('ResultPass').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
	secureDelete();
}

const secureDelete = () => {
	document.getElementById("textpass").value = "";
	document.getElementById("textnopass").value = "";
}