const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

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
        let buttonValue = this.id
        makeSound(buttonValue);
    })
})

function makeSound(key) {
    switch(key){
        case 'red':
            let red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case 'blue':
            let blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case 'yellow':
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case 'green':
            let green = new Audio("sounds/green.mp3");
            green.play();
            break;
        default:
            break;
    }
}