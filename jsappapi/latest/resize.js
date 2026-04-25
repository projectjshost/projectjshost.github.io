// Resize app to a resolution
export const resizeApp = (x, y) => {
	if (!window.screenTop && !window.screenY) {
		return false
	} else {
		window.resizeTo(x, y);
		return true
	}
}