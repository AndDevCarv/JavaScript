//Minha solução
function forEach3(lista, callback) {
    for (let i = 0; i < lista.length; i++){
        callback(lista[i], i)
    }
}

const aprovados = ['andre', 'bruno', 'luana']

/*forEach3(aprovados, function(nome, indice) {
    console.log(`${indice}) ${nome}`);
})*/

//Solução do professor

Array.prototype.forEach2 = function(callback) { //colocando a funcao nova no prototype ele puxa automaticamente
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){ 
    console.log(`${nome}, ${indice}`);
})