function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 1:
            return console.log(`Voce comprou ${quantidade} cachorros-quentes que deu um total de R$ ${quantidade * 3}`);
        case 2:
            return console.log(`Voce comprou ${quantidade} Hamburguer simples que deu um total de R$ ${quantidade * 4}`);
        case 3:
            return console.log(`Voce comprou ${quantidade} cheeseburguer que deu um total de R$ ${quantidade * 5.5}`);
        case 4:
            return console.log(`Voce comprou ${quantidade} Bauru que deu um total de R$ ${quantidade * 7.5}`);
        case 5:
            return console.log(`Voce comprou ${quantidade} refrigerantes que deu um total de R$ ${quantidade * 3.5}`);
        case 6:
            return console.log(`Voce comprou ${quantidade} sucos que deu um total de R$ ${quantidade * 2.8}`);
        default:
            return console.log('Codigo invalido');
    }
}

cardapio(1,4)
cardapio(3,4)
cardapio(2,4)
cardapio(6,4)