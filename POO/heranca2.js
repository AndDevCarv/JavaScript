
Object.prototype.attrZ = 'Delta'
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}




const veiculo = {
    velAtual: 0,
    velMax: 200,

    aumentaVelocidade(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    velocimetro() {
        return this.velAtual
    }
}

const ferrari = {
    __proto__:veiculo,
    modelo: 'F-40',
    velMax: 300,
    velocimetro() {
        return console.log(`Modelo:${this.modelo} : ${super.velocimetro()} km|H`);
        
    }
}

ferrari.aumentaVelocidade(2350)
console.log(ferrari.velocimetro())