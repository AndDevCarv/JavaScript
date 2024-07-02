const notas = [6.7, 5.5, 3.1, 8.9, 10, 6.3, 8.5]


let notasBaixas = [];

for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i]);
    }   
}

console.log(notasBaixas);