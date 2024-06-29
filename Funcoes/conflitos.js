const pessoa = {
    saudacao: 'Olá',
    falar () {
        console.log(this.saudacao);
    }
}

pessoa.falar()
// const falar = pessoa.falar()
// falar() // conflito entre paradigmas, aqui o js não sabe qual metodo falar ele chama

const falaar = pessoa.falar.bind(pessoa)// o bind é o que referencia o obj à funcao
falaar()