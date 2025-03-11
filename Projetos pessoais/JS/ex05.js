function formatter (numero) {
    let formatado = numero.toFixed(2).replace(".", ",")
    return console.log(`Valor R$ ${formatado}`);
}

formatter(3.222)