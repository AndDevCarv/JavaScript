const faqButtons = document.querySelectorAll(".faqBtn"); //pesquisa o botão, observe que, ele usa o selectorAll que retorna uma lista de todos os elementos com aquela tag

faqButtons.forEach(button => { //foreach que vai percorrer todos os itens dessa lista
    button.addEventListener("click", function() {
        const postIt = button.nextElementSibling; //quando clicar no BOTAO, ele vai pegar o proximo elemento, nesse caso o paragrafo
        postIt.classList.toggle("show") //após pegar o parágrafo ele aciona a classe .show, se ela ja estiver acionada ele desativa
        
        const backColor = button.parentElement;
        backColor.classList.toggle("back")
    
    })
});











/*resumo que a ia mandou:
Quando usar cada um?
Usa querySelector quando você só precisa de um único elemento (ex: um menu, um modal, etc).

Usa querySelectorAll quando você precisa aplicar alguma lógica em vários elementos, como:

Vários botões de FAQ

Vários campos de formulário

Várias imagens, etc.

 */