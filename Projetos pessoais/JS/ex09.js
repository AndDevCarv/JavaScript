function sistema (nota) {
    if (nota < 38) {
        return console.log("Reprovado");
    } else {
        return (Math.round(nota / 5) * 5)
    }

}

console.log(sistema(423));
