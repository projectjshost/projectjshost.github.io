import { openAppWindow } from "../jsappapi/latest/wm.js";
import { apps } from "../jsappapi/latest/apps.js";

if(localStorage.trafficLightCaptionButtons === "true") {
	document.body.classList.add("trafficLightCaptionButtons");
}

if(localStorage.reverseTitlebar === "true") {
	document.body.classList.add("reverseTitlebar");
}

openAppWindow("appcenter");

window.openAppWindow = openAppWindow;
