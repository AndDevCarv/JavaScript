const str = "A sorte favorece os audazes"

function contaLetra(letra, frase) {
    const strArr = [...frase]
    let aparicao = 0

    for (let i = 0; i < strArr.length; i++){
        if (strArr[i] == letra) {
            aparicao++
        }
    } return console.log(aparicao)
}

contaLetra('a', "A sorte favorece os audazes")