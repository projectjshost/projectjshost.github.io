import { openAppWindow } from "../jsappapi/latest/wm.js";
import { apps } from "../jsappapi/latest/apps.js";

openAppWindow("appcenter", null, { width: 500, height: 650, canClose: false });

window.openAppWindow = openAppWindow;
