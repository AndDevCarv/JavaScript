let numeros = [1,2,3,4,5]

function mediaAritmetica(array) {
    let numeros = 0
    for (let i = 0; i < array.length; i++) {
        numeros += array[i]
    }

    let calculo = numeros / array.length
    return console.log(calculo)
}

mediaAritmetica(numeros)