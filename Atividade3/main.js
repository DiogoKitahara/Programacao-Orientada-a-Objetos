import { Conta } from "./Conta.js";
import { AgenciaBancaria } from "./AgenciaBancaria.js";

let conta1 = new Conta(111, "Diogo");
let conta2 = new Conta(222, "Tiago");
conta1.depositar(-500) // Mensagem de erro
conta1.depositar(600); // saldo 600
conta1.retirar(200);   // saldo 400

let agencia1 = new AgenciaBancaria();
agencia1.addConta(conta1);