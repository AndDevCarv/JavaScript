//metodos de criação de objetos

//notação literal

const obj1 = {nome: 'Andre'}
//console.log(typeof(obj1))


//notação new object

const obj2 = new Object
obj2.nome = 'Andre'
//console.log(typeof(obj2));

//notação função factory

function Construtor(nome, preco, desconto) {
    this.nome = nome

    this.getDesconto = () => {
        return preco * (1 - desconto)
    }
}

const obj = new Construtor ('PC', 3200, 0.15)
console.log(obj.getDesconto())