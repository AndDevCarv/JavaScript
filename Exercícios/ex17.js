const aumento = function (salario, plano) {
    switch (plano) {
        case 'A':
            return salario + ((salario * 10) / 100)
        case 'B':
            return salario + ((salario * 20) / 100)
        case 'C':
            return salario + ((salario * 30) / 100)
        default:
            return console.log('Plano não cadastrado');
    }
}

console.log(aumento(1000, 'C'))