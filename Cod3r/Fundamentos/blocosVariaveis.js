for (var i = 1; i < 10; i++){ //definindo uma variavel com o var ela consegue ser puxada pra fora e exibir o valor '10', caso foir deefinida com let isso não sera possivel
    console.log('i = ', i)
}

console.log('i', i)

for (let x = 1; x < 5; x++){ //viu só, ele lança um undefined
    console.log('x=', x)
}
console.log('x=', x)