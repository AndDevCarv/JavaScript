const pessoa = {
    nome: 'andre',
    idade: 21,
    profissao: 'TI'
}

console.log(Object.keys(pessoa));

console.log(Object.entries(pessoa));


Object.entries(pessoa).forEach (e => console.log(`${e[1]} : ${e[0]}`))


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable : true,
    writable : false,
    value : '19-09-71'
})

console.log(Object.entries(pessoa))
pessoa.dataNascimento = '18-09-68'
console.log(Object.entries(pessoa));
