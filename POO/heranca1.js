//em tese, todo objeto quando procura alguma variavel dentro de uma função, se ela não existir dentro do escopo da função ele vai ir para o
//objeto pai e procurar e assim por diante, todo objeto aponta para um prototype

const ferrari = {
    motor: 3.5,
    modelo: 'f40'
}

const volvo = {
    motor: 'super',
    modelo: 'v50'
}

console.log(ferrari.__proto__);
console.log(volvo.__proto__);

console.log(ferrari.__proto__ === Object.prototype);

