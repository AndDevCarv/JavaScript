const numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(function(e){
    return e * 3
})

const multiplica = e => e * 2;
const adiciona = e => e + 10;
const formata = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(multiplica).map(adiciona).map(formata)
console.log(resultado);

/*
Estrutura do map

const novoArray = array.map(function(elemento, indice, array) {
    Retorna algo para cada elemento do array
});

*/