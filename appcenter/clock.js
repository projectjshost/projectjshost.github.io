const canvas = document.getElementById('clockCanvas');
const ctx = canvas.getContext('2d');

// Set up high DPI canvas
const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
ctx.scale(dpr, dpr);

const centerX = rect.width / 2;
const centerY = rect.height / 2;
const radius = Math.min(centerX, centerY) - 2;

function drawClock() {
	// Draw clock face
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--element').trim() || "#00000000";
	ctx.fill();

	const now = new Date();
	const hours = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	// Draw hour hand
	drawHand(hours * 30 + minutes * 0.5, radius * 0.5, 2, '--foreground');

	// Draw minute hand
	drawHand(minutes * 6, radius * 0.7, 1.5, '--foreground');

	// Draw second hand
	drawHand(seconds * 6, radius * 0.9, 1, '--foreground2');
}

function drawHand(angle, length, width, colorVar) {
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	const radians = (angle - 90) * Math.PI / 180;
	ctx.lineTo(centerX + length * Math.cos(radians), centerY + length * Math.sin(radians));
	ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim() || "#00000000";
	ctx.lineWidth = width;
	ctx.lineCap = 'round';
	ctx.stroke();
}

// Update clock every second
setInterval(drawClock, 1000);
setTimeout(drawClock, 50);
