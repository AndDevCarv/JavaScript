const pessoa = {
    nome: 'Andre',
    idade: 21,
    profissao: 'ti'
}

function inversor (arr) {
    const invertido = Object.fromEntries(Object.entries(arr).map(([chave, valor]) => ([valor, chave])))
    console.log(invertido);
}
inversor(pessoa)