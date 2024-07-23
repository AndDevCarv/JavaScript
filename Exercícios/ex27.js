
let criancas = 
[
    {nome: 'Ana', altura: 1.2, crescimento: 0.2},
    {nome: 'Joao', altura: 1.4, crescimento: 0.3}
]

function calculaAltura(criancas, anos) {

    for (i = 0; i < criancas.length; i++) {
        let crianca1 = criancas[i]
        let crianca2 = criancas[i+1]

        if (crianca1.altura > crianca2.altura) {
            console.log(`A crianca1 é maior que a 2`);
        }
    }

    for(i = 0; i < criancas.length; i++) {
        let crianca = criancas[i]
        crianca.altura += crianca.crescimento * anos
       
    }
    return criancas
    

}

let resultado = calculaAltura(criancas, 3)
console.log(resultado);