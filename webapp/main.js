import { setAppName } from "../jsappapi/latest/main.js";
import { getAppParam } from "../jsappapi/latest/params.js";
import { dialog } from "../jsappapi/latest/dialog.js";

const target = getAppParam("target");

if (typeof target === "string") {
	const iframe = document.createElement("iframe");

	iframe.src = decodeURIComponent(target);

	Object.assign(iframe.style, {
		border: "none",
		position: "fixed",
		top: "0",
		left: "0",
		width: "100vw",
		height: "100vh"
	});

	iframe.onerror = () => {
		location.reload();
	};

	document.body.appendChild(iframe);
} else {
	dialog("Invalid target parameter.", "error")
}

const name = getAppParam("name");

if (typeof name === "string") setAppName(decodeURIComponent(name).replaceAll("+", " "));