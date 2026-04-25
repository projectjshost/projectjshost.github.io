/**
 * Opens a file picker and returns the file's ArrayBuffer and metadata.
 * 
 * @param {string} [accept] - Comma-separated list of allowed file extensions or MIME types (e.g., ".json, .png, image/*").
 * @returns {Promise<{ buffer: ArrayBuffer, name: string, type: string }>}
 */
export const getArrayBufferFromFilePicker = async (accept = "") => {
	return new Promise((resolve, reject) => {
		const input = document.createElement('input');
		input.type = 'file';

		if (accept) {
			input.accept = accept;
		}

		input.onchange = async (event) => {
			const file = event.target.files[0];
			if (!file) {
				return reject(new Error("No file selected"));
			}

			try {
				const buffer = await file.arrayBuffer();

				resolve({
					buffer: buffer,
					name: file.name,
					type: file.type
				});
			} catch (error) {
				reject(error);
			}
		};

		input.oncancel = () => {
			reject(new Error("User cancelled file selection"));
		};

		input.click();
	});
};