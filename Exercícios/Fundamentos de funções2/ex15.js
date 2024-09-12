function ePar (numero) {
    return numero % 2 === 0
}

const teste = [1,2,2,3,4,5,6]

function padraoPar(arr) {
    const reserva = []
    for (let i = 0; i < arr.length; i++){
        if (ePar(arr[i]) && ePar(i)){
            reserva.push(arr[i])
            reserva.push(i)
            return reserva
        }
    } return reserva
}
const resultado = padraoPar(teste)

console.log(resultado)

