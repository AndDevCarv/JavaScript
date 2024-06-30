function pessoa () {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade);
    }, 2000)
}
//new pessoa
// exemplo que foi dado pelo professor que apresenta um erro
// porem é posssivel ajustar isso atribuido o this a uma variavel

function gente () {
    this.dedos = 0

    const self = this;

    setInterval(function(){ 
        self.dedos++
        console.log(self.dedos);
    }, 700)
}

//new gente

//porem ainda tem um jeito mais interessante de fazer isso


function tarefas () {
    this.trabalhos = 0

    setInterval(() => {
        this.trabalhos++
        console.log(this.trabalhos);

    },700)
}

new tarefas

// o arrow function herda o this do contexto lexico