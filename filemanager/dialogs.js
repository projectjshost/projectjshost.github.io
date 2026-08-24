import { DOM } from "./dom.js";

let promptResolve = null;
let confirmResolve = null;

export function showDialog(dialogEl) {
	DOM.overlay.style.display = 'block';
	dialogEl.style.display = 'block';
	document.body.classList.add('dialog-open');
}

export function hideDialog(dialogEl) {
	DOM.overlay.style.display = 'none';
	dialogEl.style.display = 'none';
	document.body.classList.remove('dialog-open');
}

export function openPrompt(title, defaultVal = '') {
	return new Promise((resolve) => {
		DOM.promptTitle.innerText = title;
		DOM.promptInput.value = defaultVal;
		showDialog(DOM.promptDialog);
		DOM.promptInput.focus();
		promptResolve = resolve;
	});
}

function promptConfirm() {
	const val = DOM.promptInput.value.trim();
	hideDialog(DOM.promptDialog);
	if (promptResolve) promptResolve(val);
}

function promptCancel() {
	hideDialog(DOM.promptDialog);
	if (promptResolve) promptResolve(null);
}

export function openConfirm(title, message) {
	return new Promise((resolve) => {
		DOM.confirmTitle.innerText = title;
		DOM.confirmMessage.innerText = message;
		showDialog(DOM.confirmDialog);
		confirmResolve = resolve;
	});
}

function confirmOk() {
	hideDialog(DOM.confirmDialog);
	if (confirmResolve) confirmResolve(true);
}

function confirmCancel() {
	hideDialog(DOM.confirmDialog);
	if (confirmResolve) confirmResolve(false);
}

export function initDialogs() {
	DOM.btnPromptConfirm.addEventListener('click', promptConfirm);
	DOM.btnPromptCancel.addEventListener('click', promptCancel);
	DOM.promptInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') promptConfirm();
	});

	DOM.btnConfirmOk.addEventListener('click', confirmOk);
	DOM.btnConfirmCancel.addEventListener('click', confirmCancel);
}
