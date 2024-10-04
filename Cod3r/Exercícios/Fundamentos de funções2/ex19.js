const numeros = [1, 2, 3, 4, 5, 6]

const somador = (acumulador, numero) => {return acumulador + numero}

function calculaMedia (arr) {
    const resultado = arr.reduce(somador, 0)
    return console.log(resultado / arr.length);
}
calculaMedia(numeros)