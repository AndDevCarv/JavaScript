
function impares (numero1, numero2) {
    let maiorNumero = 0
    let menorNumero = 0

    if (numero1 > numero2) {
        menorNumero = numero2
        let temp = numero1
        numero2 = numero1
        numero2 = temp
        maiorNumero = numero2
    } else {
        maiorNumero = numero2
        menorNumero = numero1
    }

    for (let i = menorNumero; i < maiorNumero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        } else{
            console.log('');   
        }
    }
}
impares(100, 4)