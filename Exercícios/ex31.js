
let numeros = [-1, 2, 2, 56, -0]


function sign(array) {
    let positivos = 0
    let negativos = 0
    
    for (i = 0; i < array.length; i++) {
        let resultado = Math.sign(array[i])
        
        if (resultado === 1 || resultado === 0) {
            positivos++;
        } else if (resultado === -1) {
            negativos++;
        } else {
            console.log('Não é um elemento válido');
        }
    }
    console.log(`No array fornecido há ${positivos} numeros positivos e ${negativos} numeros negativos`);
}

sign(numeros)