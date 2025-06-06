const secondElement = document.getElementById("second");
const minuteElement = document.getElementById("minute");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const focusButton = document.getElementById("focus");
const breakButton = document.getElementById("break");

let second = 60;
let minute = 24;
function timer() {
    minuteElement.textContent = String(minute).padStart(2, "0");
    second--;
    if (second < 0) {
        second = 59
        minute--
        minuteElement.textContent = String(minute).padStart(2, "0");
    }
    secondElement.textContent = String(second).padStart(2, "0");
}

let cron;
function start() {
    clearInterval(cron);
    cron = setInterval(timer, 1000);
}

function pause() {
    clearInterval(cron);
    clearInterval(timer);
}

function focusBtn() {
    clearInterval(cron);
    minute = 25;
    second = 0;

    minuteElement.textContent = String(minute).padStart(2, "0");
    secondElement.textContent = String(second).padStart(2, "0");
}

function breakBtn() {
    clearInterval(cron);
    minute = 5;
    second = 0;

    minuteElement.textContent = String(minute).padStart(2, "0");
    secondElement.textContent = String(second).padStart(2, "0");
}

startButton.addEventListener("click", start);
focusButton.addEventListener("click", focusBtn);
pauseButton.addEventListener("click", pause);
breakButton.addEventListener("click", breakBtn);