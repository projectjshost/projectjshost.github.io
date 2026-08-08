import moment from 'https://esm.sh/moment-timezone';
import { setAppName } from '../jsappapi/latest/main.js';
import { dialog } from '../jsappapi/latest/dialog.js';

let timerInterval, stopwatchInterval;
let timerTime = 0, stopwatchTime = 0;
let timerRunning = false, stopwatchRunning = false;
let currentTab = "";

const timeFormat = "HH:mm:ss";
const dateFormat = "dddd YYYY-MM-DD";

const formatTime = (totalSeconds) => {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const getClocks = () => {
	try {
		return JSON.parse(localStorage.clocks || "[]");
	} catch (e) {
		return [];
	}
};

const saveClocks = (clocks) => {
	localStorage.clocks = JSON.stringify(clocks);
};

const startTimer = () => {
	if (timerRunning || timerTime <= 0) return;
	timerInterval = setInterval(() => {
		timerTime--;
		const display = document.getElementById("timerDisplay");
		if (display) display.textContent = formatTime(timerTime);
		if (timerTime <= 0) {
			stopTimer();
			alert("Timer finished!");
		}
	}, 1000);
	timerRunning = true;
};

const stopTimer = () => {
	clearInterval(timerInterval);
	timerRunning = false;
};

const resetTimer = () => {
	stopTimer();
	timerTime = 0;
	const display = document.getElementById("timerDisplay");
	if (display) display.textContent = formatTime(timerTime);
};

const setTimerTime = () => {
	const inputEl = document.getElementById("timerInput");
	const input = inputEl ? inputEl.value : "";
	const timeParts = input.split(":").map(part => parseInt(part, 10));

	if (timeParts.length === 3 && !timeParts.some(isNaN)) {
		timerTime = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
		const display = document.getElementById("timerDisplay");
		if (display) display.textContent = formatTime(timerTime);
	} else {
		dialog("Invalid time format. Please use HH:MM:SS.", "error");
	}
};

const startStopwatch = () => {
	if (stopwatchRunning) return;
	stopwatchInterval = setInterval(() => {
		stopwatchTime++;
		const display = document.getElementById("stopwatchDisplay");
		if (display) display.textContent = formatTime(stopwatchTime);
	}, 1000);
	stopwatchRunning = true;
};

const stopStopwatch = () => {
	clearInterval(stopwatchInterval);
	stopwatchRunning = false;
};

const resetStopwatch = () => {
	stopStopwatch();
	stopwatchTime = 0;
	const display = document.getElementById("stopwatchDisplay");
	if (display) display.textContent = formatTime(stopwatchTime);
};

const addClock = (timezone) => {
	const clocks = getClocks();
	if (!clocks.includes(timezone)) {
		clocks.push(timezone);
		saveClocks(clocks);
	}
	switchTab("clock");
};

const removeClock = (timezone) => {
	const clocks = getClocks();
	const newClocks = clocks.filter(c => c !== timezone);
	saveClocks(newClocks);
	switchTab("clock");
};

const getLocalTimezoneOffsetDifference = (timezone2) => {
	const localOffset = moment().utcOffset();
	const targetOffset = moment.tz(timezone2).utcOffset();
	return ((localOffset - targetOffset) / 60) * -1;
};

const updateClocks = () => {
	const time = moment().format(timeFormat);
	document.title = time;

	if (currentTab !== "clock") return;

	const bigClock = document.getElementById("bigClock");
	if (bigClock) bigClock.textContent = time;

	document.querySelectorAll("#clocksContainer .clock").forEach((clockEl) => {
		const tz = clockEl.dataset.timezone;
		const timeEl = clockEl.querySelector(".time");
		if (timeEl) {
			timeEl.textContent = moment().tz(tz).format(timeFormat);
		}
	});
};

const renderClockTab = () => {
	setAppName("Clock");
	const view = document.getElementById("currentView");
	const clocks = getClocks();

	view.innerHTML = `
		<span id="bigClock"></span>
		<span id="currentDate">${moment().format(dateFormat)}</span>
		<div id="addTimezoneContainer">
			<button id="btn-add-clock" class="main">
				<span class="icon">add</span>Add clock
			</button>
		</div>
		<div id="clocksContainer"></div>
	`;

	const container = document.getElementById("clocksContainer");
	const clocksHTML = clocks.map((clock) => {
		const friendlyName = clock.split("/").pop().replace(/_/g, " ");
		const offset = getLocalTimezoneOffsetDifference(clock);

		return `
			<div class="clock" data-timezone="${clock}">
				<span class="label">${friendlyName} (${offset > 0 ? '+' : ''}${offset}h)</span>
				<span class="time"></span>
				<button class="btn-remove-clock" data-timezone="${clock}">
					<span class="icon">delete</span>
				</button>
			</div>
		`;
	}).join("");

	container.innerHTML = clocksHTML;
	updateClocks();
};

const renderAddClockTab = () => {
	setAppName("Add Clock");
	const view = document.getElementById("currentView");
	const clocks = getClocks();
	const timezones = moment.tz.names();

	view.innerHTML = `
		<input type="text" id="timezoneSearch" placeholder="Search timezones..." autofocus>
		<div id="searchResultBox"></div>
	`;

	document.getElementById("timezoneSearch").addEventListener("input", (e) => {
		const value = e.target.value.toLowerCase();
		const box = document.getElementById("searchResultBox");
		box.innerHTML = "";

		if (value.length < 2) return;

		const results = timezones.filter((tz) =>
			tz.toLowerCase().replace(/_/g, " ").includes(value) && !clocks.includes(tz)
		);

		box.innerHTML = results.map((result) => `
			<div class="searchResult" data-timezone="${result}">
				${result.replace(/_/g, " ")}
			</div>
		`).join("");
	});
};

const renderTimerTab = () => {
	setAppName("Timer");
	document.getElementById("currentView").innerHTML = `
		<div id="timerDisplay">${formatTime(timerTime)}</div>
		<div id="timerControls">
			<input type="text" id="timerInput" placeholder="HH:MM:SS" />
			<button id="btn-set-timer" class="main"><span class="icon">alarm_on</span>Set Time</button>
			<br>
			<button id="btn-start-timer"><span class="icon">play_arrow</span>Start</button>
			<button id="btn-stop-timer"><span class="icon">stop</span>Stop</button>
			<button id="btn-reset-timer"><span class="icon">restart_alt</span>Reset</button>
		</div>
	`;
};

const renderStopwatchTab = () => {
	setAppName("Stopwatch");
	document.getElementById("currentView").innerHTML = `
		<div id="stopwatchDisplay">${formatTime(stopwatchTime)}</div>
		<div id="stopwatchControls">
			<button id="btn-start-sw" class="main"><span class="icon">play_arrow</span>Start</button>
			<button id="btn-stop-sw"><span class="icon">stop</span>Stop</button>
			<button id="btn-reset-sw"><span class="icon">restart_alt</span>Reset</button>
		</div>
	`;
};

const switchTab = (tab) => {
	if (currentTab) {
		const prevTab = document.getElementById(`${currentTab}_tab`);
		if (prevTab) prevTab.classList.remove("active");
	}

	currentTab = tab;
	const newTab = document.getElementById(`${tab}_tab`);
	if (newTab) newTab.classList.add("active");

	if (tab === "clock") renderClockTab();
	else if (tab === "add_clock") renderAddClockTab();
	else if (tab === "timer") renderTimerTab();
	else if (tab === "stopwatch") renderStopwatchTab();
};

document.getElementById("clock_tab")?.addEventListener("mousedown", () => switchTab('clock'));
document.getElementById("timer_tab")?.addEventListener("mousedown", () => switchTab('timer'));
document.getElementById("stopwatch_tab")?.addEventListener("mousedown", () => switchTab('stopwatch'));

// Event delegation on #currentView using target.closest()
document.getElementById("currentView")?.addEventListener("click", (e) => {
	const addClockBtn = e.target.closest("#btn-add-clock");
	const removeClockBtn = e.target.closest(".btn-remove-clock");
	const searchResult = e.target.closest(".searchResult");

	if (addClockBtn) switchTab('add_clock');
	else if (removeClockBtn) removeClock(removeClockBtn.dataset.timezone);
	else if (searchResult) addClock(searchResult.dataset.timezone);

	else if (e.target.closest("#btn-set-timer")) setTimerTime();
	else if (e.target.closest("#btn-start-timer")) startTimer();
	else if (e.target.closest("#btn-stop-timer")) stopTimer();
	else if (e.target.closest("#btn-reset-timer")) resetTimer();

	else if (e.target.closest("#btn-start-sw")) startStopwatch();
	else if (e.target.closest("#btn-stop-sw")) stopStopwatch();
	else if (e.target.closest("#btn-reset-sw")) resetStopwatch();
});

if (!localStorage.clocks) saveClocks([]);
setInterval(updateClocks, 1000);
switchTab("clock");