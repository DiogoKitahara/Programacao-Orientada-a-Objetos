// Diogo Seidi Kitahara RA:10442324069
// Hugo de Souza Dias   RA:10442324247

import { Conta } from "./Conta.js";
import { AgenciaBancaria } from "./AgenciaBancaria.js";

let conta1 = new Conta(111, "Diogo");
let conta2 = new Conta(222, "Tiago");
console.log(conta1.Pepino());
conta1.depositar(-500) // Mensagem de erro
conta1.depositar(600); // saldo 600
conta1.retirar(200);   // saldo 400
conta2.depositar(1000);// saldo 1000
conta2.retirar(2000);  // Mensagem de erro

let agencia1 = new AgenciaBancaria();
agencia1.addConta(conta1);           // conta1 adicionada
agencia1.addConta(conta2);           // conta2 adicionada
agencia1.getConta(222);              // conta2 retornada0
agencia1.getConta(333);              // conta inexistente
console.log(agencia1.listContas());  //lista todos as contas