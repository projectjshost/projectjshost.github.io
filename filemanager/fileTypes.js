export const IMAGE_EXTENSIONS = new Set([
	'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'ico', 'avif', 'jxl'
]);

export const TEXT_EXTENSIONS = new Set([
	'txt', 'md', 'markdown', 'json', 'js', 'mjs', 'cjs', 'ts', 'tsx', 'jsx',
	'html', 'htm', 'css', 'scss', 'sass', 'less', 'xml', 'csv', 'tsv', 'log',
	'yaml', 'yml', 'ini', 'conf', 'config', 'env', 'sh', 'bash', 'zsh', 'bat',
	'cmd', 'ps1', 'c', 'cpp', 'h', 'hpp', 'py', 'rs', 'go', 'java', 'kt',
	'php', 'sql', 'rb', 'lua', 'toml'
]);

export function getFileExtension(filename) {
	const lastDot = filename.lastIndexOf('.');
	return lastDot !== -1 ? filename.slice(lastDot + 1).toLowerCase() : '';
}

export function isImageFile(filename, mimeType = '') {
	if (mimeType.startsWith('image/')) return true;
	return IMAGE_EXTENSIONS.has(getFileExtension(filename));
}

export function isTextFile(filename, mimeType = '') {
	if (
		mimeType.startsWith('text/') ||
		mimeType === 'application/json' ||
		mimeType === 'application/javascript' ||
		mimeType === 'application/xml' ||
		mimeType === 'application/x-yaml'
	) {
		return true;
	}
	return TEXT_EXTENSIONS.has(getFileExtension(filename));
}
