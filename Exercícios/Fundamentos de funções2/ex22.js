function sorteio (numero) {
    const aleatorio = Math.floor((Math.random() * 10)+1)
    if (numero === aleatorio) {
        console.log('Parabens, voce acertou');
    } else {
        console.log('Voce erroukkkkkkkkkkk')
    }
}

sorteio(1)