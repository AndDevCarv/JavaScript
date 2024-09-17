const palavras = ['programador', 'sucesso', 'maça']

const resultado = palavras.map(palavra => palavra.replace(/[aeiou]/g, ''))
console.log(resultado);
