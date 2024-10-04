function factory (nome, idade) {
    this.nome = nome
    this.idade = idade

    this.falar = function() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const teste = new factory('andre', 21)
teste.falar()