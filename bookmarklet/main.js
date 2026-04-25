import $ from 'https://esm.sh/jquery';
import bookmarks from "./bookmarks.json" with { type: "json" };

const $bookmarks = $("#bookmarks");
const $bookmarklet = $("#bookmarklet");

let parent;
let parentOrigin;

window.addEventListener('message', (event) => {
	const message = event.data;
	if (message !== "ping") return;
	parent = event.source;
	parentOrigin = event.origin;
	$('#origin').text("Connected to: " + parentOrigin.replace("https://", ""));
	$bookmarks.show();
	$bookmarklet.hide();
});

export const sendCommand = (JScode) => {
	parent.postMessage("exec_" + btoa(JScode), parentOrigin);
}

window.sendCommand = sendCommand;

function processItems(items, container) {
	items.forEach(item => {
		if (typeof item.url === 'string') {
			const button = document.createElement('button');
			button.textContent = item.name;
			button.addEventListener('click', () => sendCommand(item.url));
			container.append(button);
		} else if (item.items?.length) {
			const folderDiv = document.createElement('div');
			folderDiv.className = `bookmark-folder${container === $bookmarks ? '' : ' nested'}`;
			const header = document.createElement('div');
			header.className = 'folder-header';
			header.textContent = item.name;
			const content = document.createElement('div');
			content.className = 'folder-content';
			folderDiv.append(header, content);
			processItems(item.items, content);
			container.append(folderDiv);
		}
	});
}

processItems(bookmarks, $bookmarks);

$("a#bookmarklet").attr("href", `javascript:(function(){const host='${location.origin}';try{eval('')}catch(a){return void alert('This site is protected.')}const childWindow=window.open('${location.href}','_blank','width=492,height=600');return childWindow?void(setInterval(()=>{childWindow.postMessage('ping',host)},1e3),window.addEventListener('message',event=>{const message=event.data;if('string'==typeof message&&message.startsWith('exec_')){const command=message.substring(5);try{eval(decodeURIComponent(atob(command)))}catch(a){alert(a)}}})):void alert('Failed to open window.')})();`);