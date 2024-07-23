
let criancas = 
[
    {nome: 'Ana', altura: 1.2, crescimento: 0.2},
    {nome: 'Joao', altura: 1.4, crescimento: 0.3}
]

function calculaAltura(criancas, anos) {

    for (i = 0; i < criancas.length - 1; i++) {
        let crianca1 = criancas[i]
        let crianca2 = criancas[i + 1]

        if (crianca1.altura > crianca2.altura) {
            console.log(`A crianca ${crianca1.nome} é maior que a crianca ${crianca2.nome}`);
            if (crianca2.crescimento > crianca1.crescimento) {
                while (crianca1.altura > crianca2.altura) {
                    let crianca2 = criancas[i]
                    crianca2.altura += crianca.crescimento * anos
                }
            }
        } else if (crianca1.altura < crianca2.altura) {
            console.log(`A crianca ${crianca2.nome} é maior que a crianca ${crianca1.nome}`);
        } else {
            console.log('As duas criancas tem a mesma altura');
        }

        let crianca = criancas[i]
        crianca.altura += crianca.crescimento * anos

        return console.log(`Em ${anos} anos as criancas vão ter: ${crianca1.nome} ${crianca1.altura} e ${crianca2.nome} ${crianca2.altura}`);
    }

}

let resultado = calculaAltura(criancas, 3)
console.log(resultado);