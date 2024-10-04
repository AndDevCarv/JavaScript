const arr = [10, 10, 11]

const soma = arr.reduce((acumulador, somatorio) => {
    return acumulador + somatorio
}, 0)

console.log(soma);
