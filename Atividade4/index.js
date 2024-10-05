// Diogo Seidi Kitahara RA:10442324069
// Hugo de Souza Dias   RA:10442324247

import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";
import { GrupoDeContribuintes } from "./GrupoDeContribuintes.js";

// Criando contribuintes
const pessoa1 = new PessoaFisica('Gabriel', '123.456.789-00', 2500, 'M');
const pessoa2 = new PessoaFisica('Maria', '987.654.321-00', 3200, 'F');
const pessoa3 = new PessoaFisica('Julis', '111.222.333-44', 3200, 'F');
const empresa1 = new PessoaJuridica('Empresa', '00.123.456/0001-00', 10000, 2005);

// Criando grupo de contribuintes
const grupo = new GrupoDeContribuintes();
grupo.addContribuinte(pessoa1);
grupo.addContribuinte(pessoa2);
grupo.addContribuinte(pessoa3);
grupo.addContribuinte(empresa1);

// Exibindo o total de imposto
console.log(`Total de Imposto: R$ ${grupo.getTotalImposto()}`);

// Exibindo porcentagem de contribuintes do sexo feminino
console.log(`Porcentagem de Contribuintes Feminino: ${grupo.getPorcentagemContribuintesFeminino()}%`);
