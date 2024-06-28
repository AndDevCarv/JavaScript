function soma (a,b,c) {
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}

console.log(soma(1,1))

function soma2 (a,b,c) {
    a = a !== undefined ? a : 1 //operador ternário, se A nao for indefinido vai er o valor de 1
    b = 1 in arguments ? b : 1 //o 1 significa o indice do B, pergunta se ele tem algum argumento e se nao tiver passa o valor de 1
    c = isNaN(c) ? c : 1 //o mais seguro segundo o professor, se c nao for um numero ele recebe o valor de 1

    return a + b + c
}