export const runInSandbox = (() => {
	let counter = 0;

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

			const cleanup = () => {
				window.removeEventListener('message', handleMessage);
				iframe.remove();
			};

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

export const runInSandboxString = async (code) => {
	let output;
	try {
		output = await runInSandbox(code);
	} catch (error) {
		return `Error: ${error.message}`;
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

