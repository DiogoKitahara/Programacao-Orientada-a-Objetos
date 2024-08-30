class Calculadora {
    res;
    mem = [];

    getRes() {
        return this.res;
    }

    getMem() {
        return this.mem;
    }

    zerar() {
        this.res = 0;
    }
    desfaz() {
        this.mem.pop();
    }

    soma(numero) {
        this.res += numero;
        this.mem.push(numero);
    }

    subtrai(numero) {
        this.res -= numero;
        this.mem.push(numero);
    }

    multiplica(numero) {
        this.res *= numero;
        this.mem.push(numero);
    }

    divide(numero) {
        this.res /= numero;
        this.mem.push(numero);
    }

    potencia(numero) {
        this.res **= numero;
        this.mem.push(numero);
    }

    porcentagem(numero) {
        this.res = this.res * numero / 100;
        this.mem.push(numero);
    }

    raiz() {
        this.res = Math.sqrt(res);
        this.mem.push(numero);
    }
}

var calculadora = new Calculadora();
calculadora.zerar();
calculadora.soma(100);
calculadora.multiplica(2);
console.log(calculadora.getRes());