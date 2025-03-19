function salario (plan, n) {
    let aumento = 0
    let novo = n
    switch (plan) {
        case 'A':
            aumento = (10 / 100) * n
            novo += aumento
            break
        case 'B':
            aumento = (15 / 100) * n
            novo += aumento
            break
        case 'C':
            aumento = (20 / 100) * n
            novo += aumento
            break
        default:
            console.log("Valor inválido");
    }
    return novo
}

console.log(salario ('C', 1000))