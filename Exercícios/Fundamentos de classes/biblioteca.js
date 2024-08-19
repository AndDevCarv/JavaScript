class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }
    emprestar() {
        if (this.disponivel != true) {
            console.log(`O livro ${this.titulo} não está disponivel no momento`);
        } else {
            console.log(`Livro ${this.titulo} emprestado`);
            this.disponivel = false
        }
    }

    devolver() {
        if (this.disponivel = true) {
            console.log(`O livro ${this.titulo} ja está disponivel`);
        } else {
            console.log(`Livro ${this.titulo} devolvido`);
            this.disponivel = true
        }
    }

    disponibilidade() {
        if (this.disponivel = true) {
            console.log('está disponivel');
        } else {
            console.log('não está disponivel');
        }
    }

    informacoes() {
        return console.log(`${this.titulo} de autoria de ${this.autor} na data de ${this.anoPublicacao} e atualmente ${this.disponibilidade()}`);
    }
}

class Biblioteca {
    constructor() {
        this.livros = []
    }

    adicionaLivro(titulo, autor, anoPublicacao) {
        const novoLivro = new Livro(titulo, autor, anoPublicacao)
        this.livros.push(novoLivro)
        console.log(`Livro ${titulo} adicionado na biblioteca`);
        
    }

    removeLivro(livroDel){
        const index = this.livros.findIndex(livro => livro.titulo === livroDel)
        this.livros.splice(index, 1)
    }

    listarLivros() {
        for (i = 0; this.livros.length > i; i++) {
            console.log(this.livros[i]);
        }
    }
}