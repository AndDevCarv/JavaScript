function mensalidade(valor, numero) {
    let valorPagar = valor

    if (numero == 1){
        valorPagar += valor
    } else if (numero > 1) {
        let juros = 5 / 100

        for (let i = 0; i < numero; i++) {
            valorPagar += valor * juros
        }
        
    } else {
        return false
    }

    return console.log(`O valor a pagar é ${valorPagar.toFixed(2)}`);
}

mensalidade(100, 3)