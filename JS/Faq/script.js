const faqButtons = document.querySelectorAll(".faqBtn");

faqButtons.forEach(button => {
    button.addEventListener("click", function() {
        const postIt = button.nextElementSibling;
        postIt.classList.toggle("show")
    })
});