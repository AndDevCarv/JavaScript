const pessoas = ['andre', 'gabriel', 'souza']

for (elemento in pessoas) {
    console.log(`Nomes = ${pessoas[elemento]}`)
}

const pessoa = {
    nome: 'andre',
    idade: 21,
    altura: 1.9,
    peso: 100
}

for (atributo in pessoa) {
    console.log(`Atributos = ${pessoa[atributo]}`)
}