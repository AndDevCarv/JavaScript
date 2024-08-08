const pai = {
    nome: 'Paulo',
    cabelo: 'preto'
}

const filha1 = Object.create(
    pai, {
    nome: {value: 'luana', enumerable:true, writable:false}
    }
)
console.log(filha1.cabelo);

// ou atribuir com o Object

const filha2 = Object.create(pai ,{
    nome : {value: "Bia", enumerable: true, writable: true}
})

console.log(filha2.cabelo);

filha1.nome = 'aaaa'
filha2.nome = 'carla'

console.log(filha1.nome, filha2.nome);
