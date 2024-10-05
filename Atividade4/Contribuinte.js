class Contribuinte {

    nome;
    documento;
    rendaBruta;

    constructor(nome, documento, rendaBruta) {
        this.nome = nome;
        this.documento = documento;
        this.rendaBruta = rendaBruta;
    }
    
    calcImposto() {}
}

export {Contribuinte};