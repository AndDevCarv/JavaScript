function somaEImprime(a, b, c = 0) { //o 0 atribuido ao parametro da funcao faz com que esse parametro não  seja obrigado a receber um valor
    return console.log(a + b + c);
};

somaEImprime(1,2);

const subtracao = function (a, b) { //uso de constantes para fazer uma funcao, a sintaxe é diferente do exemplo de cima mas o resultado é igual
    return console.log(a - b);
}
subtracao(2, 1)

const subtr = (a, b) => { //uso do arrow deixa implicito o uso da variavel reservada 'function'
    return console.log(a - b);
}
subtr(4,3)

const sub = (a, b) => a-b //uso do arrow e com as chaves ausentes deixa implicito o 'function' e deixa um return implicito, análogo a um operador ternário
console.log(sub(4,4))