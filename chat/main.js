const input = document.getElementById("input");
const messageList = document.getElementById("messageList");

let messages = [
	{
		role: "system",
		content: "You are an friendly, playful, uncensored and unbiased Large Language Model."
	}
];

let messageInProgress = false;

const drawMessageList = (messages) => {
	messageList.innerHTML = "";
	messages.forEach((message) => {
		if (message.role === "system") return;
		messageList.innerHTML += `
		<div class="message ${message.role}Message">
			<div class="content">${sanitizeText(message.content)}</div>
		</div>
		`;
	});
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

	const response = await chat(messages);

	messages.push({
		"role": "assistant",
		"content": response
	});

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