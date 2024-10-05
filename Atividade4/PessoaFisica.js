import {Contribuinte} from './Contribuinte.js'

class PessoaFisica extends Contribuinte {
    sexo;

    constructor(nome, documento, rendaBruta, sexo) {
        super(nome, documento, rendaBruta);
        this.sexo = sexo;
    }

    calcImposto() {
        const renda = this.rendaBruta;
        let aliquota = 0, deducao = 0;

        if (renda <= 1400.00) {
            aliquota = 0;
            deducao = 0;
        } else if (renda <= 2100.00) {
            aliquota = 0.10;
            deducao = 100.00;
        } else if (renda <= 2800.00) {
            aliquota = 0.15;
            deducao = 270.00;
        } else if (renda <= 3600.00) {
            aliquota = 0.25;
            deducao = 500.00;
        } else {
            aliquota = 0.30;
            deducao = 700.00;
        }

        return (renda * aliquota) - deducao;
    }
}

export {PessoaFisica}