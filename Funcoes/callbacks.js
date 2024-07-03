const notas = [6.7, 5.5, 3.1, 8.9, 10, 6.3, 8.5]


let notasBaixas1 = [];

for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }   
}

console.log(notasBaixas1);


let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
})

console.log(notasBaixas2);