let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

const player1 = document.querySelector(".img1")
const player2 = document.querySelector(".img2")
const result = document.querySelector(".result")


switch(randomNum1) {
    case 1:
        player1.setAttribute("src", "images/dice1.png")
        break
    case 2:
        player1.setAttribute("src", "images/dice2.png")
        break
    case 3:
        player1.setAttribute("src", "images/dice3.png")
        break
    case 4:
        player1.setAttribute("src", "images/dice4.png")
        break
    case 5:
        player1.setAttribute("src", "images/dice5.png")
        break
    case 6:
        player1.setAttribute("src", "images/dice6.png")
        break
    default:
        console.log("erro");
}

switch (randomNum2) {
    case 1:
        player2.setAttribute("src", "images/dice1.png")
        break
    case 2:
        player2.setAttribute("src", "images/dice2.png")
        break
    case 3:
        player2.setAttribute("src", "images/dice3.png")
        break
    case 4:
        player2.setAttribute("src", "images/dice4.png")
        break
    case 5:
        player2.setAttribute("src", "images/dice5.png")
        break
    case 6:
        player2.setAttribute("src", "images/dice6.png")
        break
    default:
        console.log("erro");
}

if (randomNum1 > randomNum2) {
    result.textContent = "Player 1 wins"
} else if (randomNum1 < randomNum2) {
    result.textContent = "Player 2 wins"
} else {
    result.textContent = "Draw"
}