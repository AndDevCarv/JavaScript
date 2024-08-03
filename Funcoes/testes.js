function getPreco(imposto = 0, moeda = 'R$') {
    return `O ${this.nome} custa ${moeda} ${(this.preco * (1 - this.desconto) * (1 + imposto)).toFixed(2)}`;
}

const produto = {
    nome: 'notebook',
    preco: 15,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1

// Chamando o método do objeto produto
console.log(produto.getPreco()); // Usando os valores padrão para imposto e moeda

// Usando call para chamar a função getPreco com o objeto global
console.log(getPreco.call(global)); // Usando os valores do objeto global

// Usando call para chamar a função getPreco com o objeto produto e passando parâmetros
console.log(getPreco.call(produto, 0.2, '$')); // Usando o objeto produto e passando imposto e moeda
