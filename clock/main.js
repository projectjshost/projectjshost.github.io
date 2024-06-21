const timeFormat = "HH:mm:ss";

const dateFormat = "dddd YYYY-MM-DD";

if(!localStorage.clocks) localStorage.clocks = "[]";

const addClock = (timezone) => {
	const clocks = JSON.parse(localStorage.clocks);
	if(clocks.includes(timezone)) return;
	clocks.push(timezone);
	localStorage.clocks = JSON.stringify(clocks);
	switchTab("clock")
}

const removeClock = (timezone) => {
	const clocks = JSON.parse(localStorage.clocks);
	const index = clocks.indexOf(timezone);
	if(index !== -1) {
		clocks.splice(index, 1);
		localStorage.clocks = JSON.stringify(clocks);
	}
	switchTab("clock");
}

let currentTab = "";

const switchTab = (tab) => {
	$(`#${currentTab}_tab`).removeClass("active");

	currentTab = tab;
	document.getElementById("currentView").innerHTML="";

	$(`#${tab}_tab`).addClass("active");

	const clocks = JSON.parse(localStorage.clocks);

	switch(tab) {
		case "clock":
			setAppName("Clock");
			$("#currentView").append('<span id="bigClock"></span>');
			$("#currentView").append(`<span id="currentDate">${moment().format(dateFormat)}</span>`);
			$("#currentView").append(`
			<div id="addTimezoneContainer">
				<button id="addTimezone" class="main" onmousedown="switchTab('add_clock')">
					<span class="icon">add</span>Add clock
				</button>
			</div>`);

			$("#currentView").append('<div id="clocksContainer"></div>');

			const clocksContainer = document.getElementById("clocksContainer");

			clocks.forEach((clock) => {
				const friendlyName = clock.split("/")[clock.split("/").length-1].replaceAll("_", " ");
				$(clocksContainer).append(`
				<div class="clock" id="${clock}">
					<span class="label">${friendlyName} (${getLocalTimezoneOffsetDifference(clock)}h)</span>
					<span class="time"></span>
					<button onclick="removeClock('${clock}')"><span class="icon">delete</span></button>
				</div>`)
			});
			updateClocks();
			break;
		case "add_clock":
			setAppName("Add Clock");
			const timezones = moment.tz.names();

			$("#currentView").append(`
			<input type="text" id="timezoneSearch" placeholder="Search timezones..." autofocus></input>
			<div id="searchResultBox"></div>`);

			const searchResultBox = document.getElementById("searchResultBox");

			$("#timezoneSearch").on("input", (event)=> {
				const value = event.currentTarget.value;
				searchResultBox.innerHTML="";
				if(value.length < 2) return;

				const results = timezones.filter((timezone) => timezone.toLowerCase().replaceAll("_", " ").includes(value.toLowerCase()) && !clocks.includes(timezone));

				results.forEach((result) => {
					$(searchResultBox).append(`
					<div class="searchResult" onclick="addClock('${result}')">
					${result.replaceAll("_", " ")}
					</div>
					`)
					console.log(result)
				})
			})

			break;
		case "timer":
			setAppName("Timer");
			break;
		case "stopwatch":
			setAppName("Stopwatch");
			break;
		case "settings":
			setAppName("Clock settings");
			break;
	}
}

const getLocalTimezoneOffsetDifference = (timezone2) => {
    const localTime = moment();
    const localOffset = localTime.utcOffset();

    const momentTimezone2 = moment.tz(timezone2);
	const offsetTimezone2 = momentTimezone2.utcOffset();

    const differenceInHours = (localOffset - offsetTimezone2) / 60;
    return differenceInHours*-1;
}

const updateClocks = () => {
	if(currentTab!=="clock") return;
	$("#bigClock").text(moment().format(timeFormat));

	const clocks = document.querySelectorAll("#clocksContainer>.clock");

	clocks.forEach((clock) => {
		const elementId = clock.id.replaceAll("/", "\\/");
		$(`#${elementId}>.time`).text(moment().tz(clock.id).format(timeFormat));
	})
}


setInterval(updateClocks, 1000)