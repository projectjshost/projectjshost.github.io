export const chat = async (messages, tools) => {
	let body;
	if (typeof tools === "object") {
		body = JSON.stringify({
			messages,
			tools
		})
	} else {
		body = JSON.stringify({
			messages
		})
	}
	const response = await fetch("https://llm-api.technobyte.workers.dev", {
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"body": body
	});

	return await response.json();
}
