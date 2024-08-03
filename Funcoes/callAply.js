function getPreco (imposto = 0, moeda = 'R$') {
    return `O ${this.nome} custa ${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: 'notebook',
    preco: 15,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.10
console.log(produto.getPreco.call(global));
