const pilotos = ['Massa', 'Alonso', 'Vettel', 'Fulano']

pilotos.pop() //remove o ultimo elemento
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Andre') //adiciona um item no primeiro
console.log(pilotos);

pilotos.splice(2, 0, 'Massa') //o splice pode ser usado para adicionar elementos a partir de um indice
console.log(pilotos);
