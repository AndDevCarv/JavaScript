function contador(valor) {
    let novoValor = valor;
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;

    while (novoValor > 0) {
        if (novoValor >= 100) {
            novoValor -= 100;
            nota100 += 1;
        } else if (novoValor >= 50) {
            novoValor -= 50;
            nota50 += 1;
        } else if (novoValor >= 10) {
            novoValor -= 10;
            nota10 += 1;
        } else if (novoValor >= 5) {
            novoValor -= 5;
            nota5 += 1;
        } else if (novoValor >= 1) {
            novoValor -= 1;
            nota1 += 1;
        }
    }

    return {
        nota100,
        nota50,
        nota10,
        nota5,
        nota1
    };
}

