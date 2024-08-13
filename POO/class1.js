class ContaBancaria {
    constructor(titular, numConta, saldo) {
        this.titular = titular,
        this.numConta = numConta,
        this.saldo = saldo
    }

    deposita(valor) {
        if (valor > 0){
            this.saldo += valor
        } else {
            console.log('O valor precisa ser positivo');   
        }
    }

    saca(valor) {
        if (valor > this.saldo){
            this.saldo -= valor
        } else {
            console.log('Saldo insuficiente');
        }
    }

    extrato() {
        return console.log(this.saldo)
    }
}

const contaAndre = new ContaBancaria('André', 123, 1000)

contaAndre.deposita(100)
contaAndre.saca(50)
contaAndre.extrato()


class Banco{
    constructor () {
        this.contas = []
    }

    criaConta(numConta, titular, saldo = 0) {
        const novaConta = new ContaBancaria(numConta, titular, saldo)
        this.contas.push(novaConta)
        console.log(`Conta numero ${numConta} de titularidade ${titular} e saldo ${saldo} criada`);
        return novaConta
    }

    obterConta(numConta) {
        return this.contas[numConta]
    }
}

const banco = new Banco

const conta1 = banco.criaConta(123, 'Andre', 100)
conta1.extrato
