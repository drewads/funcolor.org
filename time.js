getTime();
updateTime();

function updateTime(){
	setInterval(function(){getTime();}, 1000);
}

function getTime(){
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let amPm = "am";
	if (hours > 12)
	{
		hours -= 12;
		amPm = "pm";
	}
	else if (hours == 12)
	{
		amPm = "pm";
	}
	else if (hours == 0)
	{
		hours = 12;
	}

	if (minutes <= 9)
	{
		minutes = "0" + minutes;
	}
	if (seconds <= 9)
	{
		seconds = "0" + seconds;
	}
	let hoursAsString = hours.toString();
	let minutesAsString = minutes.toString();
	let secondsAsString = seconds.toString();
	document.getElementById("time").innerText = hoursAsString + ":" + minutes + ":" + seconds + " " + amPm;
}