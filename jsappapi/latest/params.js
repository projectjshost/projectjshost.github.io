// Gets app Parameters
export const getAppParams = () => {
	let vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
		vars[key] = value;
	});
	return vars;
}

export const getAppParam = (parameter, defaultvalue) => {
	let urlparameter = defaultvalue;
	if (window.location.href.indexOf(parameter) > -1) {
		urlparameter = getAppParams()[parameter];
	}
	return urlparameter;
}