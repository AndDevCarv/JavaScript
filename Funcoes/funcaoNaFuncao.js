function soma (x, y) {
    return x + y;
}

function operacoes (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

operacoes(2,2)