const pessoa = {
    idade: 18,
    nome: 'Andre',
    profissao: 'DevOps'
}

function removerPropriedade (obj, propriedadeObj) {
    delete obj[propriedadeObj]
    return console.log(obj);
}

removerPropriedade(pessoa, 'idade')