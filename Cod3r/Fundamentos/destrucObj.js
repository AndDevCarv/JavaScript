const Obj = { //atribuição literal a um objeto
    nome: 'Andre',
    idade: 21,
    endereco: {
        bairro: 'centro',
        rua: 'bonita'
    }
}

//método destructuring, basicamente pegar algo de dentro de um objeto e atribuir um valor variável pra chamadas
const { nome, endereco: {bairro}} = Obj;
console.log(nome);

const { nome: n, endereco: {bairro: b}} = Obj;
console.log(n)