import { fadeIn, fadeOut, slideDown, slideUp } from "./animation.js";

/**
 * Counter used to generate unique IDs for each dialog instance.
 * @type {number}
 */
let dialogID = 0;

/**
 * Tracks the number of currently open dialogs to manage body scroll locks.
 * @type {number}
 */
let activeDialogsCount = 0;

/**
 * Valid dialog types for styling and header configuration.
 * @typedef {'info' | 'warn' | 'error' | 'custom'} DialogType
 */


/**
 * Displays a modal dialog with a message, icon, title, and close button.
 *
 * @param {string} message - The message body to display inside the dialog (supports HTML).
 * @param {DialogType} type - The predefined dialog type ('info', 'warn', 'error', or 'custom').
 * @param {string} [customTitle=""] - Custom title text (only used if `type` is set to 'custom').
 * @returns {void}
 */
export const dialog = (message, type, customTitle = "") => {
	const currentID = dialogID++;
	activeDialogsCount++;

	let icon = "";
	let title = "";
	let btnText = "Ok";

	switch (type) {
		case "info":
			icon = "info";
			title = "Info";
			break;
		case "warn":
			icon = "warning";
			title = "Warning";
			btnText = "Close";
			break;
		case "error":
			icon = "error";
			title = "An error has occurred";
			btnText = "Close";
			break;
		case "custom":
			icon = "info";
			title = customTitle;
			break;
	}

	const headerHtml = title ? `<p2><span class="icon">${icon}</span> ${title}</p2>` : "";

	// Create Overlay
	const overlay = document.createElement("div");
	overlay.className = "dialogOverlay";
	overlay.id = `overlay${currentID}`;

	// Create Dialog
	const dialogEl = document.createElement("div");
	dialogEl.className = "dialog";
	dialogEl.id = `dialog${currentID}`;
	dialogEl.setAttribute("role", "dialog");
	dialogEl.setAttribute("aria-modal", "true");
	dialogEl.innerHTML = `
        ${headerHtml}
        <div class="dialog-message">${message}</div>
        <button class="dialog-close-btn">${btnText}</button>
    `;

	const handleClose = () => closeDialog(currentID);
	overlay.addEventListener("click", handleClose);

	const closeBtn = dialogEl.querySelector(".dialog-close-btn");
	if (closeBtn) {
		closeBtn.addEventListener("click", handleClose);
	}

	document.body.classList.add("dialog-open");
	document.body.appendChild(overlay);
	document.body.appendChild(dialogEl);

	fadeIn(overlay, 200);
	slideDown(dialogEl, 200);

	if (closeBtn) {
		closeBtn.focus();
	}
};

/**
 * Closes a specific dialog and its overlay by ID, animating them out and removing them from the DOM.
 * Restores body scrolling when all dialogs are closed.
 *
 * @param {number} id - The unique ID of the dialog to close.
 * @returns {void}
 */
export const closeDialog = (id) => {
	const overlay = document.getElementById(`overlay${id}`);
	const dialogEl = document.getElementById(`dialog${id}`);

	if (overlay) {
		fadeOut(overlay, 200).then(() => overlay.remove());
	}

	if (dialogEl) {
		slideUp(dialogEl, 200).then(() => {
			dialogEl.remove();

			activeDialogsCount--;
			if (activeDialogsCount <= 0) {
				document.body.classList.remove("dialog-open");
				activeDialogsCount = 0;
			}
		});
	}
};