import $ from 'https://esm.sh/jquery';

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

	const $overlay = $(`<div class="dialogOverlay" id="overlay${currentID}"></div>`);
	const $dialog = $(`
        <div class="dialog" id="dialog${currentID}" role="dialog" aria-modal="true">
            ${headerHtml}
            <div class="dialog-message"></div>
            <button class="dialog-close-btn">${btnText}</button>
        </div>
    `);

	$dialog.find(".dialog-message").html(message);

	const handleClose = () => closeDialog(currentID);
	$overlay.on("click", handleClose);
	$dialog.find(".dialog-close-btn").on("click", handleClose);

	$("body")
		.addClass("dialog-open")
		.append($overlay.hide())
		.append($dialog.hide());

	$overlay.fadeIn(200);
	$dialog.slideDown(200);

	$dialog.find(".dialog-close-btn").focus();
};

/**
 * Closes a specific dialog and its overlay by ID, animating them out and removing them from the DOM.
 * Restores body scrolling when all dialogs are closed.
 *
 * @param {number} id - The unique ID of the dialog to close.
 * @returns {void}
 */
export const closeDialog = (id) => {
	$(`#overlay${id}`).fadeOut(200, function () { $(this).remove(); });
	$(`#dialog${id}`).slideUp(200, function () {
		$(this).remove();

		activeDialogsCount--;
		if (activeDialogsCount <= 0) {
			$("body").removeClass("dialog-open");
			activeDialogsCount = 0;
		}
	});
};