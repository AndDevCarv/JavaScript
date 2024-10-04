let array1 = [1,2,3,4]
let array2 = [5,6,7,8]
function troca (arrayA, arrayB){
    let auxiliar = [...arrayA]
    arrayA.splice(0, arrayA.length, ...arrayB)
    arrayB.splice(0, arrayB.length, ...auxiliar)

    return console.log(`Array A = ${arrayA}, array B = ${arrayB}`);
}

troca(array1, array2)