let contador = 1;

while (contador <= 10) {
    console.log(`esse é o while = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`esse é o for padrão = ${i}`)
}

const pessoas = ['andre', 'pedro', 'lucas', 'eduardo']

for (let i = 0; i < pessoas.length; i++) {
    console.log(`Alunos = ${pessoas[i]}`)
}