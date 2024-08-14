function media(nota1, nota2, nota3, aluno) {
    let mediaTotal = 10
    let valores = [nota1, nota2, nota3]
    let primeiroValor = false
    let somaNotas = 0
    const maiorvalor = Math.max(...valores)


    for (i = 0; i < valores.length; i++) {
        if (primeiroValor !== true) {
            if (valores[i] === maiorvalor) {
                valores[i] *= 4
                primeiroValor = true
            } else {
                valores[i] *= 3
                primeiroValor = true
            }
        } else {
            valores[i] *= 3
        }
    }
    
    for (i = 0; i < valores.length; i++) {
        somaNotas += valores[i]
    }

    if ((somaNotas / mediaTotal) >= 5) {
        console.log(`Aluno ${aluno} você foi APROVADO`);
    } else {
        console.log(`Aluno ${aluno} você foi REPROVADO`);
    }

}

console.log(media(6,7,5, 'André'));