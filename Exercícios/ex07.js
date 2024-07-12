function bhaskara (a, b, c) {
    let valores = []

    if (a === 0) {
        console.log("O valor de A não pode ser 0)");
    }

        let delta = ((Math.pow(b, 2)) - (4 * a * c))
        if (delta < 0 ) {
            console.log("Delta é negativo");
        }
        
            let x1 = ((-(b) + Math.sqrt(delta)) / (a * 2))
            let x2 = ((-(b) - Math.sqrt(delta)) / (a * 2))
            valores.push(x1)
            valores.push(x2)
    
    return valores
}

let resultados = bhaskara(1, -3, 2);
if (resultados.length > 0) {
    console.log("As raízes da equação são: ", resultados);
}





