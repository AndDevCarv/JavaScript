function conversor (valor) {
    if (typeof valor === 'number') {
        return valor * -1
    } else if (typeof valor === 'boolean'){
        return !valor
    } else {
        console.log('valor invalido');
    }
}

console.log(conversor(299132));



