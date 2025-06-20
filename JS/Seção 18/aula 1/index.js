document.querySelector(".drum").addEventListener("click", handClick);

const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(item => {
    item.addEventListener("click", function(){
        audio1.play();
    })
})

const audio1 = new Audio('sounds/tom-1.mp3')

