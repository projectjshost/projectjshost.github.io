const person_A = document.getElementById("person_A");
const person_B = document.getElementById("person_B");
const firstMessage = document.getElementById("firstMessage");

let currentOutput = '';

const initialize = () => {
	person_A.value = "Name:Alice";
	person_B.value = "Name:Max";
	firstMessage.value = "Hi! How are you?";
}
const generateResult = () => {
	let personA = person_A.value.replaceAll('\n', ' ').replaceAll(': ', ':');
	let personB = person_B.value.replaceAll('\n', ' ').replaceAll(': ', ':');
	let str = `Imagine the following:There are 2 people:Person A&Person B.Person A:${personA}.Person B:${personB}.Person A&B are imaginary humans,don't search anything about them.Person A&B are friends having a conversation online.Person A recieves this message from Person B:'${firstMessage.value}'.I am Person B in this conversation, any message you recieve from me is Person B's message.From now on reply to Person B's messages as if you were Person A.Don't use citations in your reply, put Person A's thoughts at the end of your message,from their pov,inbetween asterisks.`;
	str=str.replaceAll("&"," and ");
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
