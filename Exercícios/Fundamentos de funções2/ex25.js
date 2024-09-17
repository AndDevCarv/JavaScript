const frutas = ["maçã", "banana", "laranja"];

const resultado = frutas.filter(palavra => {
    return palavra.includes('ç')
})

console.log(resultado);
