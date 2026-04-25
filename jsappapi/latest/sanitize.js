export const sanitizeText = (str) => {
	return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}