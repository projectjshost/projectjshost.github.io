/**
 * Retrieves all query parameters from a URL as a key-value object.
 * Automatically decodes URL-encoded keys and values.
 *
 * @param {string} [url] - Optional URL to parse. Defaults to `window.location.href`.
 * @returns {Record<string, string>} An object containing all query parameters.
 *
 * @example
 * // Given URL: https://example.com?user=john%20doe&role=admin
 * const params = getAppParams();
 * // Returns: { user: "john doe", role: "admin" }
 */
export const getAppParams = (url) => {
	if (typeof window === 'undefined' && !url) {
		return {};
	}

	const targetUrl = url || window.location.href;

	try {
		// Use dummy base URL to handle relative URLs properly
		const { searchParams } = new URL(targetUrl, 'http://dummy.com');
		return Object.fromEntries(searchParams.entries());
	} catch (error) {
		console.error('Invalid URL provided to getAppParams:', error);
		return {};
	}
};

/**
 * Retrieves a specific query parameter from a URL.
 *
 * @param {string} parameter - The parameter name to look for.
 * @param {string|null} [defaultValue=null] - The fallback value if the parameter is not found.
 * @param {string} [url] - Optional URL to parse. Defaults to `window.location.href`.
 * @returns {string|null} The value of the parameter, or the default value if absent.
 *
 * @example
 * // Given URL: https://example.com?page=2
 * getAppParam('page', '1'); // Returns "2"
 * getAppParam('limit', '10'); // Returns "10"
 */
export const getAppParam = (parameter, defaultValue = null, url) => {
	if (typeof window === 'undefined' && !url) {
		return defaultValue;
	}

	const targetUrl = url || window.location.href;

	try {
		const { searchParams } = new URL(targetUrl, 'http://dummy.com');
		const value = searchParams.get(parameter);
		return value !== null ? value : defaultValue;
	} catch (error) {
		console.error('Invalid URL provided to getAppParam:', error);
		return defaultValue;
	}
};