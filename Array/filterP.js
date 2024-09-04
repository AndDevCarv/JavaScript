Array.prototype.filter2 = function(callback){
    const novoArr = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            novoArr.push(this[i])
        }
    }
    return novoArr
}

const produtos = [
    {nome: 'notebook', preco:2000, fragil: true},
    {nome: 'mac', preco:4000, fragil: true},
    {nome: 'chip', preco: 30, fragil: false},
    {nome: 'barra', preco: 20, fragil:false}
]

function checkFrag(e) {
    return e.fragil === true
}

function checkValor(e) {
    return e.preco >= 2000
}

console.log(produtos.filter2(checkFrag).filter2(checkValor));
