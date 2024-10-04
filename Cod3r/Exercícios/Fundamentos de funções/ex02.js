function triangulo (x,y,z) {
    if (x === y && y === z) {
        return console.log('O triangulo é equilatero')
    } else if (x === y || x === z || y === z) {
        return console.log('O triangulo é isosceles')
    } return console.log('O triangulo é escaleno')
}

triangulo(21,3,2)