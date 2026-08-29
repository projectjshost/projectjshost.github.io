const MIME_TYPES = {
	'html': 'text/html; charset=utf-8',
	'css': 'text/css; charset=utf-8',
	'js': 'application/javascript; charset=utf-8',
	'mjs': 'application/javascript; charset=utf-8',
	'json': 'application/json; charset=utf-8',
	'png': 'image/png',
	'jpg': 'image/jpeg',
	'jpeg': 'image/jpeg',
	'gif': 'image/gif',
	'svg': 'image/svg+xml',
	'webp': 'image/webp',
	'wasm': 'application/wasm',
	'txt': 'text/plain; charset=utf-8',
	'pdf': 'application/pdf',
};

function getMimeType(filename) {
	const ext = filename.split('.').pop()?.toLowerCase();
	return MIME_TYPES[ext] || 'application/octet-stream';
}

/**
 * Normalizes URL pathnames into directories and filename.
 * Handles root `/` and subdirectories like `/folder/` -> `/folder/index.html`.
 */
function resolvePathSegments(pathname) {
	let cleanPath = decodeURIComponent(pathname);

	if (cleanPath.endsWith('/')) {
		cleanPath += 'index.html';
	}

	cleanPath = cleanPath.replace(/^\/+|\/+$/g, '');

	if (!cleanPath) {
		cleanPath = 'index.html';
	}

	const segments = cleanPath.split('/');
	const fileName = segments.pop();

	return { segments, fileName };
}

/**
 * Gets the `.overrides` root directory handle in OPFS.
 */
async function getOverridesDirectory(create = false) {
	const root = await navigator.storage.getDirectory();
	return await root.getDirectoryHandle('.overrides', { create });
}

async function getFileFromOPFS(pathname) {
	const { segments, fileName } = resolvePathSegments(pathname);

	let currentDir;
	try {
		// Access the .overrides directory without creating it if it doesn't exist
		currentDir = await getOverridesDirectory(false);
	} catch (e) {
		return null; // .overrides directory hasn't been created yet
	}

	for (const segment of segments) {
		try {
			currentDir = await currentDir.getDirectoryHandle(segment, { create: false });
		} catch (e) {
			return null;
		}
	}

	try {
		const fileHandle = await currentDir.getFileHandle(fileName, { create: false });
		return await fileHandle.getFile();
	} catch (e) {
		return null;
	}
}

/**
 * Recursively creates folders and saves the file data into `.overrides` in OPFS.
 */
async function saveFileToOPFS(pathname, data) {
	const { segments, fileName } = resolvePathSegments(pathname);

	// Ensure .overrides root directory exists
	let currentDir = await getOverridesDirectory(true);

	// Recursively navigate or create subdirectories inside .overrides
	for (const segment of segments) {
		currentDir = await currentDir.getDirectoryHandle(segment, { create: true });
	}

	// Create and write the file
	const fileHandle = await currentDir.getFileHandle(fileName, { create: true });
	const writable = await fileHandle.createWritable();
	await writable.write(data);
	await writable.close();
}

self.addEventListener('install', (event) => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);

	if (url.origin !== self.location.origin || event.request.method !== 'GET') {
		return;
	}

	event.respondWith(
		(async () => {
			try {
				const file = await getFileFromOPFS(url.pathname);

				if (file) {
					const contentType = (file.type && file.type !== '')
						? file.type
						: getMimeType(file.name);

					console.log(`[SW] Served from .overrides: "${url.pathname}"`);

					return new Response(file, {
						status: 200,
						statusText: 'OK',
						headers: {
							'Content-Type': contentType,
							'Content-Length': file.size.toString(),
						},
					});
				}
			} catch (err) {
				console.warn(`[SW] Error reading "${url.pathname}" from .overrides:`, err);
			}

			console.log(`[SW] .overrides miss. Fetching: "${url.pathname}"`);
			const response = await fetch(event.request);

			if (response && response.status === 200) {
				const responseClone = response.clone();

				(async () => {
					try {
						const blob = await responseClone.blob();
						await saveFileToOPFS(url.pathname, blob);
						console.log(`[SW] Saved to .overrides: "${url.pathname}"`);
					} catch (err) {
						console.error(`[SW] Failed to save "${url.pathname}" to .overrides:`, err);
					}
				})();
			}

			return response;
		})()
	);
});
