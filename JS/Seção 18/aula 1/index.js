

const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(button => {
    button.addEventListener("click", function() {
        var buttonValue = this.innerHTML

        switch (buttonValue) {
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
            default:
                break;
        }
        
    })
    
});
