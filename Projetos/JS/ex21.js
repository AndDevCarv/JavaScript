function convenio(idade) {
    let valorInicial = 100;

    if (idade < 10) {
        valorInicial += 80;
    } else if (idade >= 10 && idade <= 30) {
        valorInicial += 100;
    } else if (idade > 30 && idade <= 60) {
        valorInicial += 95;
    } else if (idade > 60) {
        valorInicial += 130;
    } else {
        console.log("Valor inválido");
        return;
    }

    console.log(`Valor final do convênio: R$${valorInicial}`);
}

// Testes
convenio(9);   // Valor final do convênio: R$180
convenio(25);  // Valor final do convênio: R$200
convenio(45);  // Valor final do convênio: R$195
convenio(70);  // Valor final do convênio: R$230
