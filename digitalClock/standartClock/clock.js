
var h;
var m;
var s;
function clockTick() {
    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById("time").innerText = `${h}:${m}:${s}`;

    setTimeout(clockTick, 1000);
};

clockTick();