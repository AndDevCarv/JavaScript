function cardapio (cod, quant) {
    let preco = 0;
    switch (cod) {
        case 1:
            preco = quant * 3
            break
        case 2:
            preco = quant * 4
            break
        case 3:
            preco = quant * 5.5
            break
        case 4:
            preco = quant * 7.5
            break
        case 5:
            preco = quant * 3.5
            break
        case 6:
            preco = quant * 2.8
            break
        default:
            console.log('inválido');
    }
    return console.log(preco);
}

cardapio(1, 3)