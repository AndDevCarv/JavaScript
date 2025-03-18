function calculadora (n1, op, n2) {
    let resultado = 0
    switch (op){
        case '+':
            resultado = n1 + n2
            break
        case '-':
            resultado = n1 - n2
            break
        case '*':
            resultado = n1 * n2
            break
        case '/':
            resultado= n1 / n2
            break
        default:
            console.log("Valor inválido");
    }
    return resultado
}

console.log(calculadora(2, '/', 2));
console.log(calculadora(2, '-', 2));