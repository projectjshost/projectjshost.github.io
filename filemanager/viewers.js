import { DOM } from "./dom.js";
import { showDialog, hideDialog } from "./dialogs.js";
import { dialog } from "../jsappapi/latest/dialog.js";

let activeEditorHandle = null;
let activeImageBlobUrl = null;

export async function openTextEditor(name, file, handle) {
	const text = await file.text();
	DOM.editorTitle.innerText = name;
	DOM.editorContent.value = text;
	activeEditorHandle = handle;
	showDialog(DOM.editorDialog);
}

export function openImageViewer(name, file) {
	if (activeImageBlobUrl) {
		URL.revokeObjectURL(activeImageBlobUrl);
	}
	activeImageBlobUrl = URL.createObjectURL(file);
	DOM.imageViewerTitle.innerText = name;
	DOM.imageViewerImg.src = activeImageBlobUrl;
	showDialog(DOM.imageViewerDialog);
}

function closeImageViewer() {
	hideDialog(DOM.imageViewerDialog);
	DOM.imageViewerImg.src = '';
	if (activeImageBlobUrl) {
		URL.revokeObjectURL(activeImageBlobUrl);
		activeImageBlobUrl = null;
	}
}

async function editorSave() {
	if (!activeEditorHandle) return;
	try {
		const writable = await activeEditorHandle.createWritable();
		await writable.write(DOM.editorContent.value);
		await writable.close();
		hideDialog(DOM.editorDialog);
		activeEditorHandle = null;
	} catch (e) {
		dialog("Error saving file: " + e.message, "error");
	}
}

function editorCancel() {
	hideDialog(DOM.editorDialog);
	activeEditorHandle = null;
}

export function initViewers() {
	DOM.btnEditorSave.addEventListener('click', editorSave);
	DOM.btnEditorCancel.addEventListener('click', editorCancel);
	DOM.btnImageViewerClose.addEventListener('click', closeImageViewer);
}