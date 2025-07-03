const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    animatePress();

};

function buttonAnimation(id) {
    $(`#${id}`).fadeOut(100).fadeIn(100);
}

nextSequence();

gamePattern.forEach((id, index) => {
    setTimeout(() => {
        buttonAnimation(id);
    }, index * 500);
});

const allButtons = document.querySelectorAll(".btn")
allButtons.forEach(button => {
    button.addEventListener("click", function () {
        let userChosenColor = this.id
        userClickedPattern.push(userChosenColor);
        makeSound(userChosenColor);
    })
})

function makeSound(key) {
    let sound = new Audio("sounds/" + key + ".mp3");
    sound.play();
}

function animatePress() {
    $(".btn").click(function() {
        let botao = $(this);
        botao.addClass("pressed")
        setTimeout(() => {
            botao.removeClass("pressed");
        }, 100);
    });
}