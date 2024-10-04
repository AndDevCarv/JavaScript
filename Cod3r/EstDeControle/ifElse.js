Number.prototype.entre = function(inicio, final) {
    return this >= inicio && this <= final
}

function imprimeNota(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(8, 9)) {
        console.log('Parabens')
    } else if (nota.entre(6, 7)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 5)) {
        console.log('Reprovado')
    } else {
        console.log('Recuperação')
    }
}

imprimeNota(10)
