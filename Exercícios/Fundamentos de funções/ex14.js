const frutas = function (fruta) {
    switch(fruta) {
        case 'Maca':
            console.log('nao vendemos');
            break
        case 'Laranja':
            console.log('3 pila');
            break
        case 'Melao':
            console.log('pegue sua fruta');
            break
        default:
            console.log('Erro');
            break
    }
}

frutas('Maca')