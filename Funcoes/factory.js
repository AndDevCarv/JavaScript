function factory (nome, idade, genero) {
    return {
        nome : nome, 
        idade : idade, //lembrando que pode ser só o parametro ao inves de idade : idade
        genero : genero
    }
}

console.log(factory('andre', 21, 'masculino'));