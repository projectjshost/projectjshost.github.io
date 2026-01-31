require.config({
	paths: {
		'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs'
	}
});

let editor;

async function runCode() {
	switch (mode) {
		case "typescript": {
			const codetoRun = editor.getValue().trim();
			const result = window.ts.transpileModule(codetoRun, {
				compilerOptions: { module: ts.ModuleKind.CommonJS }
			});
			const compiled = result.outputText;
			$("#output").text(await runInSandboxString(compiled));
		}
			break;

		case "javascript": {
			const codetoRun = editor.getValue().trim();
			$("#output").text(await runInSandboxString(codetoRun));
		}
			break;
	}

}

function saveCode() {
	try {
		localStorage.setItem("CodePad_" + mode, btoa(editor.getValue()));
	} catch (e) {
		dialog(e.toString(), "error");
	}

}

function deleteCode() {
	localStorage.removeItem("CodePad_" + mode);
	editor.setValue("")
}

function downloadCode() {
	var codePadContent = editor.getValue();
	switch (mode) {
		case "typescript":
			downloadAsFile("code.ts", codePadContent)
			break;
		case "javascript":
			downloadAsFile("code.js", codePadContent)
			break;
		case "css":
			downloadAsFile("styles.css", codePadContent)
			break;
		case "html":
			downloadAsFile("index.html", codePadContent)
			break;
		case "xml":
			downloadAsFile("file.xml", codePadContent)
			break;
	}
}

const isDarkTheme = () => {
	const documentRoot = document.querySelector(':root');
	return color(getComputedStyle(documentRoot).getPropertyValue("--background")).hsl().color[2] < 50;
}

async function init(mode) {
	window.mode = mode;
	let content = "";
	if (localStorage.getItem("CodePad_" + mode) !== null) {
		content = atob(localStorage.getItem("CodePad_" + mode));
	} else {
		switch (mode) {
			case "typescript": {
				content = 'const greet = (name: string): string => {\n\treturn "Hello, " + name;\n};\ngreet("World");';
				break;
			}
			case "javascript": {
				content = 'const greet = (name) => {\n\treturn "Hello, " + name;\n};\ngreet("World");';
				break;
			}
			case "css": {
				const res = await fetch("/jsappapi/latest/interfaces/kan.css");
				content = await res.text();
				break;
			}
			case "html": {
				const res = await fetch("/appcenter/index.html");
				content = await res.text();
				break;
			}
			case "xml": {
				setAppName("XML - Code")
				break;
			}
		}
	}
	if (mode == "javascript" || mode == "typescript") {
		$("body").append(`
			<button class='main' onclick='runCode("${mode}")'><span class='icon'>play_arrow</span>Run</button>
		`);
	}
	$("body").append(`
		<button onclick='saveCode()'><span class='icon'>check</span>Save Code</button>
		<button onclick='deleteCode()'><span class='icon'>clear</span>Delete Code</button>
		<button onclick='downloadCode()'><span class='icon'>download</span>Download Code</button>
		<div id="monaco-editor-container"></div>
	`);
	require(['vs/editor/editor.main'], () => {
		editor = monaco.editor.create(document.getElementById('monaco-editor-container'), {
			value: content,
			language: mode,
			theme: isDarkTheme() ? 'vs-dark' : 'vs',
			automaticLayout: true,
			detectIndentation: false,
			insertSpaces: false
		});
	});
	$("#languageSelect").remove();
	switch (mode) {
		case "typescript":
			setAppName("TS - Code")
			break;
		case "javascript":
			setAppName("JS - Code")
			break;
		case "css":
			setAppName("CSS - Code")
			break;
		case "html":
			setAppName("HTML - Code")
			break;
		case "xml":
			setAppName("XML - Code")
			break;
	}
	if (mode == "javascript" || mode == "typescript") {
		$("body").append(`
			<p>Output: </p>
			<p id="output" class="user-select"></p>
		`);
	}
}