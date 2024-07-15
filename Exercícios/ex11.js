const anoBisexto = function (ano) {
    if (ano % 100 === 0) {
        return 'não é ano bisexto'
    } else if (ano % 4 === 0) {
        return 'ano bisexto'
    } else if ( ano % 4 === 0) {
        return 'ano bisexto'
    } else {
        return "esse ano não é bissexto";
    }
}

console.log(anoBisexto(2096))