const nomeEscola = ' Iracema Cidade ';

console.log(nomeEscola.charAt(5)); //seleciona a string do indice entre parenteses
console.log(nomeEscola.charAt(50)); //como o número está alem do lenght ele larga um char em branco

console.log(nomeEscola.charCodeAt(3)); //devolve o codigo unicode HTML
console.log(nomeEscola.substring(5, 9)); //devolve a string cortada entre os numeros do partenses

console.log(nomeEscola.replace('r', 4))
console.log('A escolinha '.concat(nomeEscola).concat('é boa')); //concatena strings