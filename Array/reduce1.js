const alunos = [
    {nome: 'alex', nota: 7, bolsista: true},
    {nome: 'Joao', nota: 8, bolsista:false},
    {nome: 'Rob', nota: 9.3, bolsista:true},
    {nome: 'Luiza', nota: 7.2, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, numero){
    console.log(acumulador, numero);
    return acumulador + numero
})

console.log(resultado);

