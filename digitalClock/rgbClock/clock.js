var h;
var m;
var s;
var currTime;
var currDay;
var currMonth;
var currYear;
var currDate;
var currDayName;
var dayObj;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function clockTick() {
    dayObj = new Date();
    h = dayObj.getHours();
    m = dayObj.getMinutes();
    s = dayObj.getSeconds();
    currDay = dayObj.getDate();
    currMonth = dayObj.getMonth();
    currYear = dayObj.getFullYear();
    currDayName = weekday[dayObj.getUTCDay()];

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    if (currDay < 10) {
        currDay = "0" + currDay;
    }
    if (currMonth < 10) {
        currMonth = "0" + currMonth;
    }

    currDate = `${currDay}/${currMonth}/${currYear}`;
    document.getElementById("time").innerText = `${h}:${m}:${s}`;
    document.getElementById("date").innerText = currDate;
    document.getElementById('day').innerText = currDayName;
    setInterval(clockTick, 1000);
}

clockTick();