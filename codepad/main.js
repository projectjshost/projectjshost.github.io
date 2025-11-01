var myCodeMirror;
var CodeMirrorTheme;
var CodeMirrorMode;
var CodeMirrorContent;

CodeMirrorTheme = "dynamic"

function runCode() {
	let codetoRun = myCodeMirror.getValue().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
	codetoRun = codetoRun.replace(/\"/gi, '"');
	eval(codetoRun);
}

function saveCode() {
	try {
		localStorage.setItem("CodePad_" + CodeMirrorMode, btoa(myCodeMirror.getValue()));
	} catch (e) {
		dialog(e.toString(), "error");
	}

}

function deleteCode() {
	localStorage.removeItem("CodePad_" + CodeMirrorMode);
	myCodeMirror.setValue("")
}

function downloadCode() {
	var codePadContent = myCodeMirror.getValue()
	switch (CodeMirrorMode) {
		case "javascript":
			downloadAsFile("code.js", codePadContent)
			break;
		case "css":
			downloadAsFile("styles.css", codePadContent)
			break;
		case "htmlmixed":
			downloadAsFile("index.html", codePadContent)
			break;
		case "xml":
			downloadAsFile("file.xml", codePadContent)
			break;
	}
}

function CodeMirrorInit(mode) {
	if (localStorage.getItem("CodePad_" + mode) !== null) {
		CodeMirrorContent = atob(localStorage.getItem("CodePad_" + mode));
	} else {
		CodeMirrorContent = ""
	}
	CodeMirrorMode = mode;
	if (mode == "javascript") {
		$("body").append("<button class='main' onclick='runCode()'><span class='icon'>play_arrow</span>Run</button>");
	}
	$("body").append("<button onclick='saveCode()'><span class='icon'>check</span>Save Code</button><button onclick='deleteCode()'><span class='icon'>clear</span>Delete Code</button><button onclick='downloadCode()'><span class='icon'>download</span>Download Code</button>");
	$("head").append('<link rel="stylesheet" href="/lib/codemirror/theme/' + CodeMirrorTheme + '.css">')
	myCodeMirror = CodeMirror(document.body, {
		value: CodeMirrorContent,
		mode: mode,
		lineNumbers: "true",
		theme: CodeMirrorTheme
	});
	$("#languageSelect").remove();
	switch (mode) {
		case "javascript":
			setAppName("JS - Code")
			break;
		case "css":
			setAppName("CSS - Code")
			break;
		case "htmlmixed":
			setAppName("HTML - Code")
			break;
		case "xml":
			setAppName("XML - Code")
			break;
	}
}