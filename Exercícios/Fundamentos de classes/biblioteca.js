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

    emprestaLivro(livroEmp) {
        const livroBusca = this.livros.find(livro => livro.titulo = livroEmp)
        if (livroBusca) {
            livroBusca.emprestaLivro()
        } else {
            console.log(`O livro ${livroEmp} não está disponivel`);
        }
    }

    devolveLivro (livroDev) {
        const livroDevolucao = this.livros.find (livro => livro.titulo = livroDev)
        if (livroDevolucao) {
            livroDevolucao.devolver()
        } else {
            console.log(` o livro ${livroDev} não foi encontrado`);
        }
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
        for (let i = 0; this.livros.length > i; i++) {
            console.log(this.livros[i]);
        }
    }
}

const bibliotecaa = new Biblioteca()

const livro1 = bibliotecaa.adicionaLivro('Algoritmos', 'Andre', 2020)
bibliotecaa.emprestaLivro(livro1)
const livro2 = bibliotecaa.adicionaLivro('Padroes', 'Raul', 2021)
bibliotecaa.removeLivro(livro1)
bibliotecaa.listarLivros()