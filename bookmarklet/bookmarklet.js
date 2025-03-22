javascript:(function() {
	const host = "https://projectjshost.github.io";

	try {
		eval('');
	} catch (e) {
		alert('This site is protected.');
		return;
	}

	const childWindow = window.open(host + '/bookmarklet', '_blank', 'width=492,height=600');

	// Check if childWindow was successfully opened
	if (!childWindow) {
		alert('Failed to open window.');
		return;
	}

	setInterval(() => {
		childWindow.postMessage('ping', host);
	}, 1000);

	window.addEventListener('message', (event) => {		
		const message = event.data;
		if(typeof message === "string" && message.startsWith("exec_")) {
			// Trim exec_ from the message
			const command = message.substring(5);
			try {
				eval(decodeURIComponent(atob(command)));
			} catch (e) {
				alert(e);
			}
			
		}
	});
})();