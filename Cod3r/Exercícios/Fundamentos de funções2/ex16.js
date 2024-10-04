function bis(ano) {
    if (ano % 100 === 0){
        console.log('Ano não é bissexto');
        return
    } else if (ano % 2 === 0){
        console.log('ano bissexto');
        return
    } else if(ano % 400 === 0) {
        console.log('ano bissexto');
        return
    }
}

bis(2004)
bis(2032)
bis(1984)