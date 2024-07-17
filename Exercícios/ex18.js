let numeros = [1,2,3,4,5,6,7,8,9,10]

for (i = 0; i < numeros.length; i++) {
    const operacao = numeros[i]

    switch(operacao) {
        case 1:
            console.log('um');
            break
        case 2:
            console.log('dois');
            break
        case 3:
            console.log('tres');
            break
        case 4:
            console.log('quatro');
            break
        case 5:
            console.log('cinco');
            break
        case 6:
            console.log('seis');
            break
        case 7:
            console.log('sete');
            break
        case 8:
            console.log('oito');
            break
        case 9:
            console.log('nove');
            break
        case 10:
            console.log('deix');
            break
       default:
            console.log('numero não reconhecido');
    }
}