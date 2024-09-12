const despesas = [
    {
        nome: 'comida', categoria: 'casa', valor: 300
    },
    {
        nome: 'jogos', categoria: 'games', valor: 200
    },
    {
        nome: 'brinquedos', categoria: 'filho', valor: 150
    }
]

const resultado = despesas.map((e)=>{
    return e.valor
})
const resultadoFinal = resultado.reduce((acumulador, elemento) =>{
    return acumulador + elemento
},0)
console.log(resultadoFinal);
