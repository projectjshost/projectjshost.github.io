import $ from 'https://esm.sh/jquery';
import { sha256, sha512, md5 } from '../jsappapi/latest/hash.js';
import { getArrayBufferFromFilePicker } from '../jsappapi/latest/filepicker.js';

$("#importFile").on("click", async () => {
	const file = await getArrayBufferFromFilePicker();

	const start = performance.now();

	$("#filename").text(`File: ${file.name}`);
	$("#filesize").text(`Size: ${file.buffer.byteLength} bytes`);
	$("#results").show();

	$("#outputHashMD5").text(await md5(file.buffer));
	$("#outputHashSHA256").text(await sha256(file.buffer));
	// $("#outputHashSHA512").text(await sha512(file.buffer));

	const end = performance.now();
	$("#duration").text(`Time: ${(end - start).toFixed(0)} ms`);
})