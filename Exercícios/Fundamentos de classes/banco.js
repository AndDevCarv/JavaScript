class ContaBancaria {
    constructor(titular, numConta, saldo) {
        this.titular = titular,
        this.numConta = numConta,
        this._saldo = saldo
    }

    deposita(valor) {
        if (valor > 0){
            this._saldo += valor
        } else {
            console.log('O valor precisa ser positivo');   
        }
    }

    set saca(valor) {
        if (valor <= this._saldo){
            this._saldo -= valor
        } else {
            console.log('Saldo insuficiente');
        }
    }

    get extrato() {
        return console.log(this._saldo)
    }


}

class Banco{
    constructor () {
        this.contas = []
    }

    criaConta(titular, numConta,saldo) {
        const novaConta = new ContaBancaria(titular, numConta, saldo)
        this.contas.push(novaConta)
        console.log(`Conta numero ${numConta} de titularidade ${titular} e saldo ${saldo} criada`);
        return novaConta
    }

    obterConta(numConta) {
        return this.contas.find(conta=> conta.numConta === numConta )
    }

    transferencia(valor, numContaOrigem, numContaDestino) {
        const contaOrigem = this.obterConta(numContaOrigem);
        const contaDestino = this.obterConta(numContaDestino);
        
        if (contaOrigem && contaDestino) {
            if (contaOrigem.saldo >= valor) {
                contaOrigem.saca(valor);
                contaDestino.deposita(valor);
                console.log(`Transferência de R$${valor} realizada de ${contaOrigem.titular} (Conta: ${numContaOrigem}) para ${contaDestino.titular} (Conta: ${numContaDestino}).`);
            } else {
                console.log('Saldo insuficiente para a transferência.');
            }
        } else {
            console.log('Conta de origem ou destino não encontrada.');
        }
    } 
}

const banco = new Banco()

const conta1 = banco.criaConta('andre', 123, 1999)
const conta2 = banco.criaConta('roger', 32, 10000)

conta1.saca = 999
conta1.extrato
