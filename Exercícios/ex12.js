function fatorial (numero) {
    let fat = numero;
    
    for (i = 1; i < numero; i++) {
        fat = fat * i
    } return fat
    
}
console.log(fatorial(6))