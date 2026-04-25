import $ from 'https://esm.sh/jquery';
import moment from 'https://esm.sh/moment-timezone';
import { setAppName } from '../jsappapi/latest/main.js';

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
		$("#timerDisplay").text(formatTime(timerTime));
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
	$("#timerDisplay").text(formatTime(timerTime));
};

const setTimerTime = () => {
	const input = $("#timerInput").val();
	const timeParts = input.split(":").map(part => parseInt(part, 10));

	if (timeParts.length === 3 && !timeParts.some(isNaN)) {
		timerTime = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
		$("#timerDisplay").text(formatTime(timerTime));
	} else {
		alert("Invalid time format. Please use HH:MM:SS.");
	}
};

const startStopwatch = () => {
	if (stopwatchRunning) return;
	stopwatchInterval = setInterval(() => {
		stopwatchTime++;
		$("#stopwatchDisplay").text(formatTime(stopwatchTime));
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
	$("#stopwatchDisplay").text(formatTime(stopwatchTime));
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

	$("#bigClock").text(time);

	$("#clocksContainer .clock").each(function () {
		const tz = $(this).data("timezone");
		$(this).find(".time").text(moment().tz(tz).format(timeFormat));
	});
};

const renderClockTab = () => {
	setAppName("Clock");
	const view = $("#currentView").empty();
	const clocks = getClocks();

	view.append(`
		<span id="bigClock"></span>
		<span id="currentDate">${moment().format(dateFormat)}</span>
		<div id="addTimezoneContainer">
			<button id="btn-add-clock" class="main">
				<span class="icon">add</span>Add clock
			</button>
		</div>
		<div id="clocksContainer"></div>
	`);

	const container = $("#clocksContainer");
	clocks.forEach((clock) => {
		const friendlyName = clock.split("/").pop().replace(/_/g, " ");
		const offset = getLocalTimezoneOffsetDifference(clock);

		container.append(`
			<div class="clock" data-timezone="${clock}">
				<span class="label">${friendlyName} (${offset > 0 ? '+' : ''}${offset}h)</span>
				<span class="time"></span>
				<button class="btn-remove-clock" data-timezone="${clock}">
					<span class="icon">delete</span>
				</button>
			</div>
		`);
	});
	updateClocks();
};

const renderAddClockTab = () => {
	setAppName("Add Clock");
	const view = $("#currentView").empty();
	const clocks = getClocks();
	const timezones = moment.tz.names();

	view.append(`
		<input type="text" id="timezoneSearch" placeholder="Search timezones..." autofocus>
		<div id="searchResultBox"></div>
	`);

	$("#timezoneSearch").on("input", (e) => {
		const value = e.target.value.toLowerCase();
		const box = $("#searchResultBox").empty();

		if (value.length < 2) return;

		const results = timezones.filter((tz) =>
			tz.toLowerCase().replace(/_/g, " ").includes(value) && !clocks.includes(tz)
		);

		results.forEach((result) => {
			box.append(`
				<div class="searchResult" data-timezone="${result}">
					${result.replace(/_/g, " ")}
				</div>
			`);
		});
	});
};

const renderTimerTab = () => {
	setAppName("Timer");
	$("#currentView").empty().append(`
		<div id="timerDisplay">${formatTime(timerTime)}</div>
		<div id="timerControls">
			<input type="text" id="timerInput" placeholder="HH:MM:SS" />
			<button id="btn-set-timer">Set Time</button>
			<br>
			<button id="btn-start-timer">Start</button>
			<button id="btn-stop-timer">Stop</button>
			<button id="btn-reset-timer">Reset</button>
		</div>
	`);
};

const renderStopwatchTab = () => {
	setAppName("Stopwatch");
	$("#currentView").empty().append(`
		<div id="stopwatchDisplay">${formatTime(stopwatchTime)}</div>
		<div id="stopwatchControls">
			<button id="btn-start-sw">Start</button>
			<button id="btn-stop-sw">Stop</button>
			<button id="btn-reset-sw">Reset</button>
		</div>
	`);
};

const switchTab = (tab) => {
	if (currentTab) $(`#${currentTab}_tab`).removeClass("active");

	currentTab = tab;
	$(`#${tab}_tab`).addClass("active");

	if (tab === "clock") renderClockTab();
	else if (tab === "add_clock") renderAddClockTab();
	else if (tab === "timer") renderTimerTab();
	else if (tab === "stopwatch") renderStopwatchTab();
};


$("#clock_tab").on("mousedown", () => switchTab('clock'));
$("#timer_tab").on("mousedown", () => switchTab('timer'));
$("#stopwatch_tab").on("mousedown", () => switchTab('stopwatch'));

$("#currentView")
	.on("click", "#btn-add-clock", () => switchTab('add_clock'))
	.on("click", ".btn-remove-clock", function () { removeClock($(this).data("timezone")) })
	.on("click", ".searchResult", function () { addClock($(this).data("timezone")) })

	.on("click", "#btn-set-timer", setTimerTime)
	.on("click", "#btn-start-timer", startTimer)
	.on("click", "#btn-stop-timer", stopTimer)
	.on("click", "#btn-reset-timer", resetTimer)

	.on("click", "#btn-start-sw", startStopwatch)
	.on("click", "#btn-stop-sw", stopStopwatch)
	.on("click", "#btn-reset-sw", resetStopwatch);

if (!localStorage.clocks) saveClocks([]);
setInterval(updateClocks, 1000);
switchTab("clock");