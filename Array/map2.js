const arrJson = '[{"nome": "chinelo", "preco": 30.00},{"nome": "camisa", "preco": 20.00},{"nome": "calca", "preco": 25.00}]';


const array = JSON.parse(arrJson)


const resultado = array.map(function(e){
    return e.preco
})

console.log(resultado);

/*

Se o array for um array de objetos precisamos passar tudo na mesma string para conseguir fazer a formatação

*/