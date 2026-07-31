/**
 * Sanitizes a string by replacing HTML special characters (`&`, `<`, `>`, `"`, `'`)
 * with their corresponding HTML entities to prevent XSS (Cross-Site Scripting) attacks.
 *
 * @param {unknown} str - The text to sanitize. If a non-string value is passed, it returns an empty string.
 * @returns {string} The sanitized, HTML-safe string.
 *
 * @example
 * sanitizeText('<script>alert("XSS")</script>');
 * // Returns: '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
 *
 * @example
 * sanitizeText(null);
 * // Returns: ''
 */
export const sanitizeText = (str) => {
	if (typeof str !== 'string') return '';

	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};