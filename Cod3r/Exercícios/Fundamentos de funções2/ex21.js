const numeros = [1,-1,2,24,5,6,2,-15]
function minimo (arr) {
    const menorNum = Math.min(...arr)
    return menorNum
}
console.log(minimo(numeros))