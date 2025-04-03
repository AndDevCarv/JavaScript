let increment = document.querySelector("#inc");
let decrement = document.querySelector("#dec");
let number = document.querySelector(".number")
let reset = document.querySelector("#res")
let count = parseInt(number.textContent);

increment.addEventListener("click", function () {
    count++
    number.textContent = count
})

decrement.addEventListener("click", function () {
    if (count > 0) {
        count--
        number.textContent = count
    }
})

reset.addEventListener("click", function () {
    count = 0
    number.textContent = count
})