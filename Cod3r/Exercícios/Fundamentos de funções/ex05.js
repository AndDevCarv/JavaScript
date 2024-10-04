function formatacaoDin(valor) {
    novoValor = valor.toFixed(2)
    novoValor = parseFloat(novoValor)

    return novoValor.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})
}

console.log(formatacaoDin(3,33333333333));