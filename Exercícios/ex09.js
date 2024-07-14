

function arredondamento (nota) {
    let proximoNum = Math.ceil(nota / 5) * 5
    if (nota < 38) {
        return console.log('Você foi reprovado');
    }
        if (proximoNum - nota < 5 && proximoNum - nota <= 3 ) {
            return proximoNum
        } else {
            return nota
        }
}
console.log(arredondamento(41))

