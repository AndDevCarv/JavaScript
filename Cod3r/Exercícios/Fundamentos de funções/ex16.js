const calculadora = function calcular(x, y, operacao) {
    
    switch(operacao) {
        case '+':
            return x + y
        case '-':
            return x - y           
        case '*':
            return x * y            
        case '/':
            return x / y           
        default:
            console.log('Erro');
            
    }
}

console.log(calculadora(2,3,'*'))