const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameBegin = false;
let level = 0;

function startGame() {
    $(document).one("keydown", function(){
        if (!gameBegin) {
            gameBegin = true;
            nextSequence();
        }
    })
}

function nextSequence() {
    level++
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
};

function checkAnswer(currentUserLevel) {
    if (userClickedPattern[currentUserLevel] === gamePattern[currentUserLevel]) {
        console.log("sucess");
        
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    else {
        console.log("wrong");
        }
    }
}

function buttonAnimation(id) {
    $(`#${id}`).fadeOut(100).fadeIn(100);
}

const allButtons = document.querySelectorAll(".btn")
allButtons.forEach(button => {
    button.addEventListener("click", function () {
        let userChosenColor = this.id
        userClickedPattern.push(userChosenColor);
        makeSound(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
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
animatePress();
startGame();
