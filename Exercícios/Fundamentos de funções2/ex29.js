const estudantes = {
    joao: [8,9,10,10],
    maria: [1,5,10,10]
}

function melhorEstudantes(arr) {
    let somaTotal = []

    for (let elemento in arr) {
        const somaNotas = arr[elemento].reduce((soma, nota) => {
            return soma + nota
        }, 0)
        somaTotal.push(somaNotas)
    }
    
    for (let i = 0; i < somaTotal.length; i++) {
        const mediaNotas = somaTotal[i] / arr.length
        somaTotal.push(mediaNotas)
    }
    return somaTotal
}

console.log(melhorEstudantes(estudantes))