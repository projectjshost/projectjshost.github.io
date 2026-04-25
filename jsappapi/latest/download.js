// Downloads a string as a file
export const downloadAsFile = (fileName, content) => {
	let hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:application/octet-stream;base64,' + btoa(content);
	hiddenElement.target = '_blank';
	hiddenElement.download = fileName;
	hiddenElement.click();
}