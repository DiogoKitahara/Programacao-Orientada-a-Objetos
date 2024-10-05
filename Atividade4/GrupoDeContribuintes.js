class GrupoDeContribuintes {
    constructor() {
        this.contribuintes = [];
    }

    addContribuinte(contribuinte) {
        this.contribuintes.push(contribuinte);
    }

    getTotalImposto() {
        let total = 0;
        for (let contribuinte of this.contribuintes) {
            total += contribuinte.calcImposto();
        }
        return total;
    }

    getPorcentagemContribuintesFeminino() {
        let totalFeminino = 0;
        for (let contribuinte of this.contribuintes) {
            if (contribuinte.sexo === 'F') {
                totalFeminino++;
            }
        }
        const totalContribuintes = this.contribuintes.length;

        return totalContribuintes === 0 ? 0 : (totalFeminino / totalContribuintes) * 100;
    }
}

export { GrupoDeContribuintes }