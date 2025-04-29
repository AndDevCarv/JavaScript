const input = document.getElementById('input');
const button = document.getElementById('button');
const mensagem = document.getElementById('mensagem');

button.addEventListener('click', function () {
    const email = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
        mensagem.textContent = "E-mail válido!";
        mensagem.classList.add("ok");
        mensagem.classList.remove("erro");
    } else {
        mensagem.textContent = "Por favor, insira um e-mail válido no formato exemplo@dominio.com";
        mensagem.classList.remove("ok");
    }
});