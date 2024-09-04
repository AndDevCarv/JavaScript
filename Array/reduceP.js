Array.prototype.reduce2 = function(callback, valorInicial){
    let acumulador = 0
    let i = 0

    if (valorInicial !== undefined) {
        acumulador == valorInicial
        i = 0
    } else {
        acumulador == this[i]
        i = 1
    }

    for (; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i)
    }
    return acumulador
}

const alunos = [
    {nome: 'alex', nota: 7, bolsista: true},
    {nome: 'Joao', nota: 8, bolsista:false},
    {nome: 'Rob', nota: 9.3, bolsista:true},
    {nome: 'Luiza', nota: 7.2, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, numero){
    console.log(acumulador, numero);
    return acumulador + numero
})

console.log(resultado);

