const timer = document.getElementById('time');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

let countdown;
let isPaused = true;
let minutes = 25;
let seconds = 0;


function updateTimer() {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }

    if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        timer.innerHTML = "Time's up!";
    } else {
        timer.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }
}

function startTimer() {
    if (isPaused) {
        countdown = setInterval(updateTimer, 1000);
        isPaused = false;
        startBtn.innerHTML = "Pause";
    } else {
        clearInterval(countdown);
        isPaused = true;
        startBtn.innerHTML = "Resume";
    }
}

function resetTimer() {
    clearInterval(countdown);
    isPaused = true;
    minutes = 25;
    seconds = 0;
    timer.innerHTML = "25:00";
    startBtn.innerHTML = "Start";
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

/* OMG!! That is really working.. :D
Unbelievable... 

What you think guys? Love the concepts or not?
Share your comments with me! 
See you all in the next video <3.