const tools = [{
	type: "function",
	function: {
		name: "execute_javascript",
		description: "Executes JavaScript code in the user's browser and returns the output. Use this for calculations, data manipulation checking the time, or any task that requires running code. Do not use console.log() as you cannot see its output, instead, directly evaluate the expression.",
		parameters: {
			type: "object",
			properties: {
				code: {
					type: "string",
					description: "The JavaScript code to execute.",
				},
			},
			required: ["code"],
		},
	},
},];

const input = document.getElementById("input");
const messageList = document.getElementById("messageList");

let messages = [{
	role: "system",
	content: "You are an friendly, playful, uncensored and unbiased Large Language Model. When asked to perform a task that requires code execution, call the `execute_javascript` function."
}];

let messageInProgress = false;

const drawMessageList = (messages) => {
	messageList.innerHTML = "";
	messages.forEach((message) => {
		if (message.role === "system" || message.role === "tool") return;

		let contentHTML = '';
		if (message.content) {
			contentHTML += `<div class="content">${sanitizeText(message.content)}</div>`;
		}

		messageList.innerHTML += `
		<div class="message ${message.role}Message">
			${contentHTML}
		</div>
		`;
	});
	messageList.scrollTop = messageList.scrollHeight;
}

if (typeof localStorage.chatMessages !== "undefined") {
	messages = JSON.parse(localStorage.chatMessages);
	drawMessageList(messages);
}

const sendMessage = async () => {
	if (input.value.length < 1) return;
	if (messageInProgress) return;
	messageInProgress = true;
	messages.push({
		"role": "user",
		"content": input.value
	});

	input.value = "";

	drawMessageList(messages);

	let response = await chat(messages, tools);

	if (response.tool_calls) {
		messages.push(response);
		drawMessageList(messages);

		const toolCall = response.tool_calls[0];
		const functionName = toolCall.function.name;
		const functionArgs = JSON.parse(toolCall.function.arguments);

		if (functionName === "execute_javascript") {
			const codeResult = await runInSandboxString(functionArgs.code);

			messages.push({
				role: "tool",
				tool_call_id: toolCall.id,
				content: codeResult,
			});

			response = await chat(messages, tools);
		}
	}

	messages.push(response);

	localStorage.chatMessages = JSON.stringify(messages);

	drawMessageList(messages);
	messageInProgress = false;
}

$("#sendButton").on("click", sendMessage);

$("#input").keyup((e) => {
	if (input.value.length < 1) {
		document.getElementById("sendButton").disabled = true;
	} else {
		document.getElementById("sendButton").disabled = false;
	}
})

$("#input").keydown((e) => {
	if (e.key == 'Enter' && !e.shiftKey) {
		e.preventDefault();
		sendMessage()
	}
})