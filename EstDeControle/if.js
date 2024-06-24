function boaNoticia(nota) {
    if (nota >= 6) {
        console.log('parabens')
    } else {
        console.log('reprovado')
    }
}
boaNoticia(5)

function seForTrue(valor) {
    if(valor) {
        console.log('É verdade ...' + valor)
    }
}

seForTrue(null)
seForTrue(NaN)
seForTrue(undefined)
seForTrue('')
seForTrue('1')