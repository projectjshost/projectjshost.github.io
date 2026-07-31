/**
 * Triggers a file download in the browser using a temporary anchor element.
 * Automatically converts plain objects/arrays into formatted JSON.
 *
 * @param {string} fileName - The default name for the downloaded file (e.g., 'data.json' or 'notes.txt').
 * @param {string | Blob | ArrayBuffer | Record<string, any> | Array<any>} content - The data to download. Can be a string, Blob, ArrayBuffer, or a plain object/array.
 * @param {string} [contentType='text/plain'] - The MIME type of the content. Automatically overridden to 'application/json' if `content` is an object.
 * @returns {void}
 */
export const downloadAsFile = (fileName, content, contentType = 'text/plain') => {
	let data = content;
	if (typeof content === 'object' && !(content instanceof Blob) && !(content instanceof ArrayBuffer)) {
		data = JSON.stringify(content, null, 2);
		contentType = 'application/json';
	}

	const blob = content instanceof Blob ? content : new Blob([data], { type: contentType });

	const url = URL.createObjectURL(blob);

	const link = document.createElement('a');
	link.href = url;
	link.download = fileName;
	link.style.display = 'none';

	document.body.appendChild(link);
	link.click();

	setTimeout(() => {
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}, 100);
};