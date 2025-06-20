document.querySelector(".drum").addEventListener("click", handClick);

const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(button => {
    button.addEventListener("keydown", (event) => {
        const tecla = event.key.toLowerCase();

        switch(tecla) {
            case 'q':
                audio1.play();
                break
            case 'a':
                audio2.play();
                break;
            default:

            break;
        }
    })
    
})

const audio1 = new Audio('sounds/tom-1.mp3')
const audio2 = new Audio('sounds/tom-2.mp3')
