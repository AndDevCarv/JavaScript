const arr = ['mercedes', 'audi', 'fiat']

function imprimir (nome, indice) {
    console.log(`${indice}) ${nome}`);
}
arr.forEach(imprimir)

//como ele pega a funcao automaticamente e advinha o nome e o indice? 
/*
Estrutura de um forEach ->>

    array.forEach(function(elemento, indice, array) {
        // Código executado para cada elemento
    });


Dessa forma, ele pega a função e faz o desmebramento para interpretar com os padrões corretos
*/