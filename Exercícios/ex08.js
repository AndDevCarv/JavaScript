let potuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function comparaPontos (lista) {
    let listaPontos = lista.split(', ')
    let maiorPonto = listaPontos [0]
    let menorPonto = listaPontos [0]
    let recordes = 0
    let piorJogo = 1

    for (let i = 1; i < listaPontos.length; i++) {
        if (parseInt(listaPontos[i]) > parseInt(maiorPonto)){
            maiorPonto = listaPontos [i]
            recordes++
        }
        else if(parseInt(listaPontos[i]) < parseInt(menorPonto)) {
            menorPonto = listaPontos[i]
            piorJogo = i+1
        }
    }

    return console.log(`voce bateu o recorde ${recordes} vezes e seu pior jogo foi o ${piorJogo}`)
}

comparaPontos(potuacoes)