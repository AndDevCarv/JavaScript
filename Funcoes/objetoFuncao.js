
function Carro (velocidadeMaxima = 200, delta = 5) {
    //variavel implicita
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro;

console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
