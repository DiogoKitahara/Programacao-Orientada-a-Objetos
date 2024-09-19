class Conta {
    #numero;
    #titular;
    #saldo;

    constructor (numero, titular) {
        this.#numero = numero;
        this.#titular = titular;
        this.saldo = 0;
    }

    getNumero() {
        return this.#numero;
    }
    setNumero(numero) {
        this.#numero = numero;
    }
    getTitular() {
        return this.#titular;
    }
    setTitular(titular) {
        this.#titular = titular;
    }
    getSaldo() {
        return this.#saldo;
    }
    setNumero(numero) {
        this.#saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo = valor;
        }
        else {
            console.log("Informe um valor válido")
        }
    }

    retirar(valor) {
        if (valor > 0 && this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log("Valor retirado: R$" + valor);
            console.log("\nSaldo: R$" + this.#saldo);
        }
        else {
            console.log("Informe um valor válido");
        }
    }
}

export {Conta}