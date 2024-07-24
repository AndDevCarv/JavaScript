let numeros = [1,3,4,5,6,2,2,73]

function maiorMenor(array) {
    let maior = Math.max(...array)
    let menor = Math.min(...array)

    return console.log(`O maior elemento é o ${maior} e o menor é o ${menor}`);
}

maiorMenor(numeros)