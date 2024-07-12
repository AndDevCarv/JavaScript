function operacaoSimples(valorInicial, juros) {
    let Valorjuros = valorInicial * (juros / 100);

    return console.log(`O valor da aplicação simples é de ${valorInicial + Valorjuros}`);
}


function operacaoComposta(valorInicial, juros, tempoAplicacao) {
    let valorFinal = valorInicial

    while (tempoAplicacao > 0) {
        valorFinal += valorInicial * (juros / 100)
        tempoAplicacao--
    } 

    return console.log(`O valor da aplicação composta é de ${valorFinal}`);
}

operacaoComposta(100, 3, 5)