class Conta {
    numero;
    titular;
    saldo;

    constructor (numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo = valor;
            console.log("Saldo atual: " + this.saldo);
        }
        else {
            console.log("Informe um valor válido")
        }
    }

    retirar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Valor retirado: R$" + valor);
            console.log("Saldo: R$" + this.saldo);
        }
        else {
            console.log("Informe um valor válido");
        }
        return this.saldo;
    }
}

export {Conta}
