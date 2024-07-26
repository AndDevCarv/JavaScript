let baixo = [1,2,3,4,5]

let alto = [1,2,3,4,5]

function calculadora (vetor, numero) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        let elemento = vetor[i] * numero
        resultado.push(elemento)
    }
    return resultado
}

console.log(calculadora(baixo, 5));

function calcGrande(vetor, numero) {
    let resultado = []
    if (numero < 5) {
        return false
    }

    for (let i = 0; i < vetor.length; i++) {
        let elemento = vetor[i] * numero
        resultado.push(elemento)
    }
    return resultado
}

console.log(calcGrande(baixo, 3));