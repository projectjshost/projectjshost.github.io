/**
 * @typedef {Object} ChatMessage
 * @property {'system'|'user'|'assistant'|'tool'|string} role - The role of the message sender.
 * @property {string} content - The content of the message.
 * @property {string} [name] - Optional name for the participant.
 */

/**
 * Sends a chat payload to the LLM Worker API and returns the response.
 *
 * @async
 * @param {ChatMessage[]} messages - Array of message objects representing the chat history.
 * @param {Object|Array<Object>} [tools] - Optional tools or function definitions for the model.
 * @returns {Promise<any>} The parsed JSON response from the LLM API.
 */
export const chat = async (messages, tools) => {
	let body;
	if (tools && typeof tools === "object") {
		body = JSON.stringify({
			messages,
			tools
		});
	} else {
		body = JSON.stringify({
			messages
		});
	}

	const response = await fetch("https://llm-api.technobyte.workers.dev", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: body
	});

	return await response.json();
};