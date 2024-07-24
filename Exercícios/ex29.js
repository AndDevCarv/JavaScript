let numeros = [1,2,3,8,9,10,11,13,14,18,19,20,21,23]

function intervalo (array) {
    let dentro = 0
    let fora = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    } return console.log(`Existem ${dentro} dentro do intervalo e ${fora} fora do intervalo`);
}
intervalo(numeros)