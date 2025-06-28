const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    console.log("cor sorteada", randomChosenColour);
    console.log("sequencia atual", gamePattern);
    
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


