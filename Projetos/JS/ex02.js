function triangulo (a, b, c) {
    if (a == b && b==c) {
        return "Equilátero";
    } else if (a == b || b == c || a == c) {
        return "Isóscleses"
    } else {
        return "Escaleno"
    }
}

console.log(triangulo(2,2,2));
