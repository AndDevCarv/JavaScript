const idades = [12,3,45,67,41,14,23,17]

console.log(idades.filter(checkidade))

function checkidade (idade) {
    return idade <= 18
}

