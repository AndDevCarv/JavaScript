const sequencia = {
    _valor: 1, //conveção, tipo o private do python

    get valor() {return this._valor++}, //mesmo o get não estando junto quando chamamos o 'valor' fora do obj ele reconhece como getter

    set valor(valor) { // da mesma forma ocorre com o set, no momento que atribuimos algo ao 'valor' ele entende como um setter natural
        if (valor > this._valor) {
            this._valor = valor
        } else {
            console.log('erro');
        }
    }
}

console.log(sequencia.valor); //solicita o valor

console.log(sequencia.valor = 900); //atribui o valor
console.log(sequencia.valor); //valor novo
console.log(sequencia.valor); //valor novo já com a atribuição