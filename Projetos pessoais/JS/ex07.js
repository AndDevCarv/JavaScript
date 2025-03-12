function bhaskara (a,b,c) {
    let delta = (b ** 2) - (4 * a * c);

    if (delta < 0) {
        return console.log("Delta é negativo");
    }

    let x2 = ((-b - Math.sqrt(delta)) / (2 * a))
    let x1 = ((-b + Math.sqrt(delta)) / (2 * a));
    
    let resultado = [];
    resultado.push(x1);
    resultado.push(x2)

    return resultado
}

console.log(bhaskara(2,-3,-2));


