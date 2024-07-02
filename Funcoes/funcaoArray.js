const fabricantes = ['Mercedes', 'BMW', 'Audi']

function operacao (nome, indice) {
    console.log(`${indice +1}. ${nome}`);
}

fabricantes.forEach(operacao)