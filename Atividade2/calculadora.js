class Calculadora {
    res = 0;
    mem = [];

    getRes() {
        return this.res;
    }

    zerar() {
        this.res = 0;
    }

    desfaz() {
        this.mem.pop();
        this.res = this.mem[this.mem.length - 1];
    }

    soma(numero) {
        this.res += numero;
        this.mem.push(this.res);
    }

    subtrai(numero) {
        this.res -= numero;
        this.mem.push(this.res);
    }

    multiplica(numero) {
        this.res *= numero;
        this.mem.push(this.res);
    }

    divide(numero) {
        this.res /= numero;
        this.mem.push(this.res);
    }

    potencia(numero) {
        this.res **= numero;
        this.mem.push(this.res);
    }

    porcentagem(numero) {
        this.res = this.res * numero / 100;
        this.mem.push(this.res);
    }

    raizQuadrada() {
        this.res = Math.sqrt(this.res);
        this.mem.push(this.res);
    }
}

var calculadora = new Calculadora();
calculadora.soma(100);              // 100
calculadora.subtrai(20);            // 80
calculadora.multiplica(2);          // 160
calculadora.divide(10);             // 16
calculadora.potencia(2);            // 256
calculadora.porcentagem(10);        // 25.6
calculadora.raizQuadrada();         // 5.0596...
calculadora.desfaz();
console.log(calculadora.getRes());    