let numeros = [2,4,5,13,7,8,5,6,7,4,44,32,12,3]
function divisao(array){
    impar = 0
    par = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par++
        } else {
            impar++
        }
    } return console.log(`Há ${impar} numeros impares no vetor e ${par} numeros pares`);
}

divisao(numeros)