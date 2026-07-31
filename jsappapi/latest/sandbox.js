/**
 * Executes a string of JavaScript code safely inside a hidden, sandboxed `<iframe>`.
 *
 * Uses `postMessage` to asynchronously communicate with the isolated iframe environment.
 * If the evaluated result cannot be cloned via Structured Clone, it falls back to a serialized string.
 *
 * @param {string} code - The JavaScript source code to execute inside the sandbox.
 * @returns {Promise<unknown>} A promise that resolves with the evaluated value (or its stringified fallback), or rejects if an error occurs.
 */
export const runInSandbox = (() => {
	let counter = 0;

	/**
	 * @param {string} code
	 * @returns {Promise<unknown>}
	 */
	return function runInSandbox(code) {
		return new Promise((resolve, reject) => {
			const iframe = document.createElement('iframe');
			iframe.style.cssText = 'display:none;width:0;height:0;border:0;';
			iframe.setAttribute('sandbox', 'allow-scripts');

			iframe.srcdoc = `
			<!doctype html>
			<html>
			<body>
				<script>
				(function () {
					const reply = (data) => parent.postMessage(data, '*');

					window.addEventListener('message', async (event) => {
					if (event.source !== parent || !event.data || event.data.type !== 'execute') return;

					const { id, code } = event.data;

					try {
						const value = await Promise.resolve(eval(code));

						try {
							reply({ type: 'result', id, result: value });
						} catch (cloneErr) {
							let serialized;
							try {
								serialized = JSON.stringify(value);
							} catch (_) {
								serialized = String(value);
							}
							reply({ type: 'result', id, nonCloneable: true, serialized });
						}
						} catch (error) {
							reply({
								type: 'error',
								id,
								error: { name: error.name, message: error.message, stack: error.stack }
							});
						}
					});
				})();
				<\/script>
			</body>
			</html>
			`;

			const id = `sandbox-${++counter}`;

			/**
			 * Cleans up event listeners and removes the iframe element from the DOM.
			 */
			const cleanup = () => {
				window.removeEventListener('message', handleMessage);
				iframe.remove();
			};

			/**
			 * Event handler for messages returned from the sandboxed iframe.
			 *
			 * @param {MessageEvent} event - The message event received from the window.
			 */
			const handleMessage = (event) => {
				if (event.source !== iframe.contentWindow || !event.data || event.data.id !== id) return;

				if (event.data.type === 'result') {
					cleanup();
					const { nonCloneable, serialized, result } = event.data;
					resolve(nonCloneable ? serialized : result);
				} else if (event.data.type === 'error') {
					cleanup();
					const err = new Error(event.data.error.message);
					err.name = event.data.error.name;
					err.stack = event.data.error.stack;
					reject(err);
				}
			};

			window.addEventListener('message', handleMessage);

			document.body.appendChild(iframe);

			iframe.addEventListener('load', () => {
				iframe.contentWindow.postMessage({ type: 'execute', id, code }, '*');
			});
		});
	};
})();

/**
 * Executes JavaScript code in a sandboxed iframe and guarantees a formatted string output.
 * Objects are formatted using `JSON.stringify`, and errors are caught and returned as an error string.
 *
 * @param {string} code - The JavaScript source code string to execute.
 * @returns {Promise<string>} A promise that resolves to a formatted string representation of the output or error message.
 */
export const runInSandboxString = async (code) => {
	let output;
	try {
		output = await runInSandbox(code);
	} catch (error) {
		return `Error: ${/** @type {Error} */ (error).message}`;
	}

	if (typeof output === 'string') {
		return output;
	}

	if (typeof output === 'object' && output !== null) {
		return JSON.stringify(output, null, 2);
	}

	if (typeof output === 'undefined') {
		return 'undefined';
	}

	return String(output);
};