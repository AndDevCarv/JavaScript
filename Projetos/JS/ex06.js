function simples (inicial, juros, tempo) {
    let resultado = inicial * (juros / 100) * tempo;
    return console.log(`Os juros simples sobre ${inicial} é ${resultado}`);   
}

function composto (inicial, juros, tempo) {
    let decimal = juros / 100
    let taxa = Math.pow((1 + decimal), tempo);
    let resultado = inicial * taxa

    return console.log(resultado.toFixed(2));
    
}

composto(1000, 5, 6)