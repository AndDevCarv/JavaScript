function incrementa (valor, vezes) {
    let arr = []
    while (vezes > 0) {
        arr.push(valor)
        vezes--
    }return arr
}
console.log(incrementa(43, 43));
