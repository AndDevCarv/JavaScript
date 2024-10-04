function divisao (numero) {
    let novoNum = numero / 3
    console.log(novoNum);
    if (novoNum % 1 === 0 && novoNum !== undefined) {
        return true
    } else {
        return false
    }
    
}

console.log(divisao());