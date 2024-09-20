import { Conta } from "./Conta.js";
import { AgenciaBancaria } from "./AgenciaBancaria.js";

let conta1 = new Conta(111, "Diogo");
let conta2 = new Conta(222, "Tiago");
conta1.depositar(-500) // Mensagem de erro
conta1.depositar(600); // saldo 600
conta1.retirar(200);   // saldo 400
conta2.depositar(1000);// saldo 1000
conta2.retirar(2000);  // Mensagem de erro

let agencia1 = new AgenciaBancaria();
agencia1.addConta(conta1);
agencia1.addConta(conta2);
agencia1.getConta(222);
console.log(agencia1.listContas());
