class Retangulo {
    #altura;
    #largura;

    getAltura() {
        return this.#altura;         
    }

    getLargura() {
        return this.#largura;
    }

    setAltura(novaAltura) {
        if (novaAltura > 0) {
            this.#altura = novaAltura;
        }
        else {
            console.log("Altura invalida\n");
        }
    }

    setLargura(novaLargura) {
        if (novaLargura) {
            this.#largura = novaLargura;
        }
        else {
            console.log("Largura invalida\n");
        }
    }

    calcularPerimetro() {
        return (this.#altura * 2) + (this.#largura * 2);
    }

    calcularArea() {
        return this.#altura * this.#largura;
    }

    ehQuadrado() {
        if (this.#altura == this.#largura) {
            return true;
        }
        return false;
   }

}

var retangulo = new Retangulo();
retangulo.setAltura(10)
console.log("Altura: " + retangulo.getAltura());
retangulo.setLargura(10);
console.log("Largura: " + retangulo.getLargura());
console.log("Perimentro:" + retangulo.calcularPerimetro());
console.log("Area: " + retangulo.calcularArea());
console.log("Quadrado? " + retangulo.ehQuadrado());