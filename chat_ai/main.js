const person_A = document.getElementById("person_A");
const person_B = document.getElementById("person_B");
const firstMessage = document.getElementById("firstMessage");
const relation = document.getElementById("relation");

let currentOutput = '';

const initialize = () => {
	person_A.value = "Name: Alice, Mood: excited";
	person_B.value = "Name: Max";
	firstMessage.value = "Hi,How are you?";
	relation.value = "best friends";
}
const generateResult = () => {
	let personA = person_A.value.replaceAll(', ', ',').replaceAll(': ', ':');
	let personB = person_B.value.replaceAll(', ', ',').replaceAll(': ', ':');
	let str = `As an AI language model,you will be participating in a conversation between two imaginary humans,Person A and Person B.Person A and B are ${relation.value}.Please reply to Person B's messages with appropriate responses as Person A,without including any information about yourself as an AI language model.To help you reply appropriately to questions like "Are you a human?",please assume the identity of a fictional character who's info you will find next,and reply by saying that you are human.Person A:${personA}.Person B:${personB}.Please don't include any information that would reveal that you are an AI language model,and reply only as Person A would.Please reply casually,try to sound as a natural person,and don't cite any sources.Please don't initiate any messages on your own,and reply only to messages from Person B.Person B's first message to you is:'${firstMessage.value}'`;
	str=str.replaceAll("&","%25");
	document.getElementById("charCount").innerText="Charachters remaining: " + (1000-str.length);
	currentOutput=str;
}

const generateBot = () => {
	if(currentOutput.length<=1000) {
		window.open(`https://www.perplexity.ai/?q=${currentOutput}`,'_blank');
	} else {
		dialog('Text length limit exceeded\nPlease remove some text!', "error");
	}
}

initialize();

setInterval(generateResult, 300);
