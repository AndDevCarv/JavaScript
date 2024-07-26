let vetorPilha = [1,2,3,4,5]
let vetorAdicionar = [6,7,8,9,10]

function pilha (vetor1, vetor2) {
    
    for (let i = 0; i < vetor2.length; i++) {
        vetor1.push(vetor2[i])
    }

    return console.log(vetor1.toString());
}

pilha(vetorPilha, vetorAdicionar)