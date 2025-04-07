class Cliente {
    constructor(){
        this.nome;
        this.cpf;
    }
}

class ContaCorrente {
    constructor(_saldo){
        this.agencia;
        this._saldo;
    }

    saque(valor){
        if(this.valor <= this._saldo){
            this._saldo -= this.valor;
        }
    }

    deposito(valor){
        if(valor > 0) {
            this.valor += this._saldo;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = 'Clarencio Otimista';
cliente1.cpf = 2221221123;

const contaCorretnte1 = new ContaCorrente();
contaCorretnte1.agencia = 1234;
contaCorretnte1.saldo = 5000.0;

const cliente2 = new Cliente();
cliente2.nome = 'Irmão Do Jorel';
cliente2.cpf = 111211223;

const contaCorretnte2 = new ContaCorrente();
contaCorretnte2.agencia = 1235;
contaCorretnte2.saldo = 10000.0;

console.log(cliente1);
console.log(contaCorretnte1);
console.log(cliente2);
console.log(contaCorretnte2);