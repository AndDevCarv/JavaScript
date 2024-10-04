function aleatorioEntre (max, min) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

let opcao
do {
    opcao = aleatorioEntre(1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != 1)
console.log('fim')