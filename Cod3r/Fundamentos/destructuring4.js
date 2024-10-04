function rand([min = 0, max = 100]) { //pra conseguir passar um desestruturador pra um função é necessario passar um array
    if (min > max) [min, max] = [max, min];//organização para não gerar numeros negativos
    const valor = Math.random() * (max - min) + min; //é colocado um intervalo de numeros, nesse caso o max e o min, após ser definido o intervalo o random pega esse intervalo de numeros e pega um numero aleatorio 
    return Math.floor(valor);//o floor serve para arrendondar numeros para baixo, fazendo com que não haja um float
}

console.log(rand([10, 100]))