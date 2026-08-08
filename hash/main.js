import { sha256, sha512, md5 } from '../jsappapi/latest/hash.js';
import { getArrayBufferFromFilePicker } from '../jsappapi/latest/filepicker.js';

document.getElementById("importFile").addEventListener("click", async () => {
	const file = await getArrayBufferFromFilePicker();

	const start = performance.now();

	document.getElementById("filename").textContent = `File: ${file.name}`;
	document.getElementById("filesize").textContent = `Size: ${file.buffer.byteLength} bytes`;
	document.getElementById("results").style.display = "block";

	document.getElementById("outputHashMD5").textContent = await md5(file.buffer);
	document.getElementById("outputHashSHA256").textContent = await sha256(file.buffer);

	const end = performance.now();
	document.getElementById("duration").textContent = `Time: ${(end - start).toFixed(0)} ms`;
});