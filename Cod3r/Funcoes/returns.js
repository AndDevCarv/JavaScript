function quadrado (largura, altura) {
    const area = largura * altura
    if (area >= 20) {
        console.log(`Área invalida, sua área é superior à 20m2`)
    } else {
        return area
    }
}

console.log(quadrado (4,4))