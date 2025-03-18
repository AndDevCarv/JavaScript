function venda (fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui');
            break
        case 'kiwi':
            console.log("está em falta");
            break
        case 'laranja':
            console.log('tome sua fruta');
            break
        default:
            console.log('valor invalido');
            
    }
}

venda('laranja')