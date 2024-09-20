import { Conta } from "./Conta.js";

class AgenciaBancaria {
  listaConta
  codigo

  constructor() {
    this.codigo = 0;
    this.listaConta = [];
  }

  getCodigo() {
    return this.codigo;
  }
  setCodigo(codigo) {
    this.codigo = codigo;
  }

  addConta(objConta) {
    if (objConta instanceof Conta) {
      console.log("Conta adicionada");
      this.listaConta.push(objConta);
    }
    else {
      console.log("Conta invalida");
    }
  }

  getConta(numero) {
    for (let i = 0; i < this.listaConta.length; i++) {
      if (numero == this.listaConta[i].numero) {
        console.log("Conta encontrada e retornada");
        return this.listaConta[i];
      }
    }
    console.log("Numero de conta nao encontrada");
  }

  listContas() {
    let str = '';
    let contador = 1;
    for (let i = 0; i < this.listaConta.length; i++) {
      let numero = this.listaConta[i].numero;
      let titular = this.listaConta[i].titular;
      let saldo = this.listaConta[i].saldo;
      str = str + '\n\nConta ' + contador +
        '\nNumero: ' + numero +
        '\nTitular: ' + titular +
        '\nSaldo: ' + saldo;
      contador++;
    }
    return str;
  }
}

export { AgenciaBancaria };