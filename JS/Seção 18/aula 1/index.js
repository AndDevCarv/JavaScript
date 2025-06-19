document.querySelector(".drum").addEventListener("click", handClick);

const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(item => {
    item.addEventListener("click", handClick)
})

function handClick() {
    alert("click")
}