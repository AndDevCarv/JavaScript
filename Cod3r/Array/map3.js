Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const arrJson = '[{"nome": "chinelo", "preco": 30.00},{"nome": "camisa", "preco": 20.00},{"nome": "calca", "preco": 25.00}]';


const array = JSON.parse(arrJson)


const resultado = array.map2(function(e){
    return e.preco
})

console.log(resultado);
