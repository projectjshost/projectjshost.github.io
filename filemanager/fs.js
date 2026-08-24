export async function copyDirectory(srcHandle, destParentHandle, destName) {
	const newDirHandle = await destParentHandle.getDirectoryHandle(destName, { create: true });
	for await (const [name, handle] of srcHandle.entries()) {
		if (handle.kind === 'file') {
			const file = await handle.getFile();
			const newFileHandle = await newDirHandle.getFileHandle(name, { create: true });
			const writable = await newFileHandle.createWritable();
			await writable.write(file);
			await writable.close();
		} else if (handle.kind === 'directory') {
			await copyDirectory(handle, newDirHandle, name);
		}
	}
}

export async function zipDirectory(dirHandle, zipFolder) {
	for await (const [name, handle] of dirHandle.entries()) {
		if (handle.kind === 'file') {
			const file = await handle.getFile();
			zipFolder.file(name, file);
		} else if (handle.kind === 'directory') {
			const subFolder = zipFolder.folder(name);
			await zipDirectory(handle, subFolder);
		}
	}
}

export async function uploadFileObject(file, dirHandle) {
	const fileHandle = await dirHandle.getFileHandle(file.name, { create: true });
	const writable = await fileHandle.createWritable();
	await writable.write(file);
	await writable.close();
}

export async function uploadWebkitEntry(entry, dirHandle) {
	if (entry.isFile) {
		const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
		await uploadFileObject(file, dirHandle);
	} else if (entry.isDirectory) {
		const subDir = await dirHandle.getDirectoryHandle(entry.name, { create: true });
		const dirReader = entry.createReader();
		const readEntries = () => new Promise((resolve, reject) => dirReader.readEntries(resolve, reject));
		let entries;
		do {
			entries = await readEntries();
			for (const childEntry of entries) {
				await uploadWebkitEntry(childEntry, subDir);
			}
		} while (entries.length > 0);
	}
}