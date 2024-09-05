function conversor (valor) {
    if (typeof valor === 'number') {
        return valor * -1
    } else if (valor === 'boolean'){
        if (valor === true) {
            valor == false
        } else {
            valor == true
        }
    } else {
        console.log('valor invalido');
    }
}

console.log(conversor(10));



