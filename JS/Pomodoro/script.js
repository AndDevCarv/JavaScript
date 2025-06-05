const secondElement = document.getElementById("second");
const minuteElement = document.getElementById("minute");
const startButton = document.getElementById("start")

let second = 0
let minute = 0

function timer() {
    second++
    if (second == 60) {
        second = 0
        minute++
        minuteElement.textContent = minute;
    }
    secondElement.textContent = second;
}

let cron;
function start() {
    cron = setInterval(timer, 1000)
}

startButton.addEventListener("click", start);