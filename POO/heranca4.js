function MeuObjeto () {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Olá meu nome é ${this.nome}`);
    
}

obj1.falar()
obj1.nome = 'Andre'
obj1.falar()