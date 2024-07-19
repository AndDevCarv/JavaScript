function planoSaude(idade) {
    let valorPagar = 100

    if (idade <= 10) {
        valorPagar += 80
    } else if (idade >= 10 && idade <= 30){
        valorPagar += 50
    } else if (idade > 30 && idade <= 60){
        valorPagar += 100
    } else if (idade > 60) {
        valorPagar += 130
    } else {
        return false
    }
    return console.log(`O valor do convenio é ${valorPagar}`);
 
}

planoSaude(80)