const secondElement = document.getElementById("second");
const minuteElement = document.getElementById("minute");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");

let second = 0
let minute = 0

function timer() {
    second++
    if (second == 60) {
        second = 0
        minute++
        minuteElement.textContent = String(minute).padStart(2, "0");
    }
    secondElement.textContent = String(second).padStart(2, "0");
}

let cron;
function start() {
    clearInterval(cron)
    cron = setInterval(timer, 1000)
}

function reset() {
    clearInterval(cron)
    clearInterval(timer)
    second = 0
    minute = 0
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
}

function pause() {
    clearInterval(cron)
    clearInterval(timer)
}

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
pauseButton.addEventListener("click", pause);