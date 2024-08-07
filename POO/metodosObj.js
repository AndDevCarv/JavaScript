const pessoa = {
    nome: 'andre',
    idade: 21,
    profissao: 'TI'
}

console.log(Object.keys(pessoa));

console.log(Object.values(pessoa));

const arrayObj = Object.entries(pessoa)
console.log(arrayObj.length)