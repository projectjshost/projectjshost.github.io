import { dialog } from "../jsappapi/latest/dialog.js";
import { downloadAsFile } from "../jsappapi/latest/download.js";
import JSZip from "https://esm.sh/jszip";

import { DOM } from "./dom.js";
import { isImageFile, isTextFile } from "./fileTypes.js";
import { showDialog, hideDialog, openPrompt, openConfirm, initDialogs } from "./dialogs.js";
import { openTextEditor, openImageViewer, initViewers } from "./viewers.js";
import { copyDirectory, zipDirectory, uploadFileObject, uploadWebkitEntry } from "./fs.js";

let rootDir, currentDir;
let pathStack = [];
let entriesMap = new Map();

let ctxTargetName = null;
let ctxTargetKind = null;

async function init() {
	initDialogs();
	initViewers();
	initEventListeners();

	try {
		if (!navigator.storage || !navigator.storage.getDirectory) {
			throw new Error("OPFS is not supported in this browser.");
		}
		rootDir = await navigator.storage.getDirectory();
		currentDir = rootDir;
		await loadDirectory();
	} catch (e) {
		DOM.fileList.innerHTML = `<div class="empty-state">Error: ${e.message}</div>`;
	}
}

async function loadDirectory() {
	entriesMap.clear();
	DOM.fileList.innerHTML = '';

	try {
		const entries = [];
		for await (const [name, handle] of currentDir.entries()) {
			entries.push({ name, handle, kind: handle.kind });
			entriesMap.set(name, handle);
		}

		entries.sort((a, b) => {
			if (a.kind === b.kind) return a.name.localeCompare(b.name);
			return a.kind === 'directory' ? -1 : 1;
		});

		if (entries.length === 0) {
			DOM.fileList.innerHTML = '<div class="empty-state">This folder is empty</div>';
		} else {
			entries.forEach(renderItem);
		}

		updatePathDisplay();
	} catch (e) {
		dialog("Error loading directory: " + e.message, "error");
	}
}

function renderItem(entry) {
	const div = document.createElement('div');
	div.className = 'file-item';
	div.dataset.name = entry.name;
	div.dataset.kind = entry.kind;

	const icon = document.createElement('span');
	icon.className = 'icon';

	if (entry.kind === 'directory') {
		icon.innerText = 'folder';
	} else if (isImageFile(entry.name)) {
		icon.innerText = 'image';
	} else {
		icon.innerText = 'description';
	}

	const nameSpan = document.createElement('span');
	nameSpan.className = 'name';
	nameSpan.innerText = entry.name;

	div.appendChild(icon);
	div.appendChild(nameSpan);

	div.addEventListener('dblclick', () => handleOpen(entry.name, entry.kind));
	DOM.fileList.appendChild(div);
}

function updatePathDisplay() {
	let pathStr = '/';
	pathStack.forEach(p => pathStr += p.name + '/');
	DOM.pathDisplay.innerText = pathStr;
	DOM.btnUp.disabled = pathStack.length === 0;
}

async function handleOpen(name, kind) {
	const handle = entriesMap.get(name);
	if (!handle) return;

	if (kind === 'directory') {
		pathStack.push({ handle: currentDir, name: name });
		currentDir = handle;
		await loadDirectory();
	} else {
		try {
			const file = await handle.getFile();

			if (isImageFile(name, file.type)) {
				openImageViewer(name, file);
			} else if (isTextFile(name, file.type)) {
				await openTextEditor(name, file, handle);
			} else {
				dialog(`Cannot open "${name}". Unsupported file type.`, "info");
			}
		} catch (e) {
			dialog("Error opening file: " + e.message, "error");
		}
	}
}

async function uiNewFolder() {
	const name = await openPrompt("New Folder Name:");
	if (name) {
		try {
			await currentDir.getDirectoryHandle(name, { create: true });
			await loadDirectory();
		} catch (e) {
			dialog("Error creating folder: " + e.message, "error");
		}
	}
}

async function uiNewFile() {
	const name = await openPrompt("New File Name:");
	if (name) {
		try {
			await currentDir.getFileHandle(name, { create: true });
			await loadDirectory();
		} catch (e) {
			dialog("Error creating file: " + e.message, "error");
		}
	}
}

async function handleFilesUpload(e) {
	const files = Array.from(e.target.files);
	if (files.length === 0) return;
	try {
		for (const file of files) {
			await uploadFileObject(file, currentDir);
		}
		await loadDirectory();
	} catch (err) {
		dialog("Error uploading file(s): " + err.message, "error");
	}
	DOM.fileUploadInput.value = '';
}

async function handleFolderUpload(e) {
	const files = Array.from(e.target.files);
	if (files.length === 0) return;
	try {
		for (const file of files) {
			const relativePath = file.webkitRelativePath || file.name;
			const parts = relativePath.split('/');
			let targetDir = currentDir;
			for (let i = 0; i < parts.length - 1; i++) {
				targetDir = await targetDir.getDirectoryHandle(parts[i], { create: true });
			}
			const fileName = parts[parts.length - 1];
			const fileHandle = await targetDir.getFileHandle(fileName, { create: true });
			const writable = await fileHandle.createWritable();
			await writable.write(file);
			await writable.close();
		}
		await loadDirectory();
	} catch (err) {
		dialog("Error uploading folder: " + err.message, "error");
	}
	DOM.folderUploadInput.value = '';
}

async function ctxRename() {
	if (!ctxTargetName) return;
	const oldName = ctxTargetName;
	const kind = ctxTargetKind;
	const handle = entriesMap.get(oldName);
	if (!handle) return;

	const newName = await openPrompt(`Rename ${kind === 'directory' ? 'Folder' : 'File'}:`, oldName);
	if (!newName || newName === oldName) return;

	try {
		if (typeof handle.move === 'function') {
			await handle.move(newName);
		} else {
			if (kind === 'file') {
				const file = await handle.getFile();
				const newFileHandle = await currentDir.getFileHandle(newName, { create: true });
				const writable = await newFileHandle.createWritable();
				await writable.write(file);
				await writable.close();
				await currentDir.removeEntry(oldName);
			} else {
				await copyDirectory(handle, currentDir, newName);
				await currentDir.removeEntry(oldName, { recursive: true });
			}
		}
		await loadDirectory();
	} catch (e) {
		dialog("Error renaming: " + e.message, "error");
	}
}

async function ctxDownload() {
	if (!ctxTargetName) return;
	const handle = entriesMap.get(ctxTargetName);
	if (!handle) return;

	try {
		if (ctxTargetKind === 'directory') {
			const zip = new JSZip();
			await zipDirectory(handle, zip);
			const blob = await zip.generateAsync({ type: 'blob' });
			downloadAsFile(`${ctxTargetName}.zip`, blob, 'application/zip');
		} else {
			const file = await handle.getFile();
			downloadAsFile(ctxTargetName, file, file.type || 'application/octet-stream');
		}
	} catch (e) {
		dialog("Error downloading: " + e.message, "error");
	}
}

async function ctxDelete() {
	if (!ctxTargetName) return;
	const confirmed = await openConfirm(`Delete ${ctxTargetName}?`, `Are you sure you want to permanently delete this ${ctxTargetKind}?`);
	if (confirmed) {
		try {
			await currentDir.removeEntry(ctxTargetName, { recursive: true });
			await loadDirectory();
		} catch (e) {
			dialog("Error deleting entry: " + e.message, "error");
		}
	}
}

function initEventListeners() {
	DOM.btnUp.addEventListener('click', async () => {
		if (pathStack.length > 0) {
			const parent = pathStack.pop();
			currentDir = parent.handle;
			await loadDirectory();
		}
	});

	DOM.btnRefresh.addEventListener('click', loadDirectory);

	DOM.btnUpload.addEventListener('click', () => {
		showDialog(DOM.uploadDialog);
	});

	DOM.btnUploadFiles.addEventListener('click', () => {
		hideDialog(DOM.uploadDialog);
		DOM.fileUploadInput.value = '';
		DOM.fileUploadInput.click();
	});

	DOM.btnUploadFolder.addEventListener('click', () => {
		hideDialog(DOM.uploadDialog);
		DOM.folderUploadInput.value = '';
		DOM.folderUploadInput.click();
	});

	DOM.btnUploadCancel.addEventListener('click', () => {
		hideDialog(DOM.uploadDialog);
	});

	DOM.fileUploadInput.addEventListener('change', handleFilesUpload);
	DOM.folderUploadInput.addEventListener('change', handleFolderUpload);

	DOM.fileList.addEventListener('dragover', (e) => {
		e.preventDefault();
		e.stopPropagation();
	});

	DOM.fileList.addEventListener('drop', async (e) => {
		e.preventDefault();
		e.stopPropagation();
		const items = e.dataTransfer.items;
		if (items && items.length > 0) {
			try {
				for (let i = 0; i < items.length; i++) {
					const item = items[i];
					if (item.webkitGetAsEntry) {
						const entry = item.webkitGetAsEntry();
						if (entry) await uploadWebkitEntry(entry, currentDir);
					} else if (item.getAsFile) {
						const file = item.getAsFile();
						if (file) await uploadFileObject(file, currentDir);
					}
				}
				await loadDirectory();
			} catch (err) {
				dialog("Error uploading dropped items: " + err.message, "error");
			}
		} else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			try {
				for (const file of e.dataTransfer.files) {
					await uploadFileObject(file, currentDir);
				}
				await loadDirectory();
			} catch (err) {
				dialog("Error uploading dropped files: " + err.message, "error");
			}
		}
	});

	DOM.ctxRename.addEventListener('click', ctxRename);
	DOM.ctxDownload.addEventListener('click', ctxDownload);
	DOM.ctxDelete.addEventListener('click', ctxDelete);
	DOM.ctxNewFolder.addEventListener('click', uiNewFolder);
	DOM.ctxNewFile.addEventListener('click', uiNewFile);

	document.addEventListener('contextmenu', e => {
		const inContainer = e.target.closest('.app-container');
		if (!inContainer) {
			DOM.ctxMenu.classList.add('hidden');
			return;
		}

		e.preventDefault();
		const item = e.target.closest('.file-item');
		if (item) {
			ctxTargetName = item.dataset.name;
			ctxTargetKind = item.dataset.kind;
			DOM.ctxRename.style.display = '';
			DOM.ctxDownload.style.display = '';
			DOM.ctxDelete.style.display = '';
			DOM.ctxNewFolder.style.display = 'none';
			DOM.ctxNewFile.style.display = 'none';
		} else {
			ctxTargetName = null;
			ctxTargetKind = null;
			DOM.ctxRename.style.display = 'none';
			DOM.ctxDownload.style.display = 'none';
			DOM.ctxDelete.style.display = 'none';
			DOM.ctxNewFolder.style.display = '';
			DOM.ctxNewFile.style.display = '';
		}

		DOM.ctxMenu.classList.remove('hidden');

		const menuWidth = DOM.ctxMenu.offsetWidth || 160;
		const menuHeight = DOM.ctxMenu.offsetHeight || 180;

		let x = e.pageX;
		let y = e.pageY;
		if (x + menuWidth > window.innerWidth) x = Math.max(10, window.innerWidth - menuWidth - 10);
		if (y + menuHeight > window.innerHeight) y = Math.max(10, window.innerHeight - menuHeight - 10);

		DOM.ctxMenu.style.left = x + 'px';
		DOM.ctxMenu.style.top = y + 'px';
	});

	document.addEventListener('click', () => {
		DOM.ctxMenu.classList.add('hidden');
	});
}

init();