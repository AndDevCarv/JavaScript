let crianca1 = {nome:'Andre', altura:120, crescimento:0.5}

let crianca2 = {nome:'flavio', altura:110, crescimento:0.8}


function calculaAltura(crianca1, crianca2, anos) {
    if (crianca1.altura > crianca2.altura) {
        if (crianca2.crescimento > crianca1.crescimento) {
            anos = 0
            while (crianca1.altura > crianca2.altura) {
                crianca2.altura += crianca2.crescimento * anos
                anos++
            } return console.log(`A crianca ${crianca2.nome} irá ultrapassar a ${crianca1.nome} em ${anos} anos`);
        }else if (crianca2.crescimento < crianca1.crescimento) {
            anos = 0
            while (crianca1.altura < crianca2.altura) {
                crianca1.altura += crianca1.crescimento * anos
                anos++
            } return console.log(`A crianca ${crianca1.nome} irá ultrapassar a ${crianca2.nome} em ${anos} anos`);
        }
    }
}

calculaAltura(crianca1, crianca2, 5)