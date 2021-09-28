export default class ArrayNotas {
    constructor() {
        this.notas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas));
    }

    criarNota(titulo, descricao, categoria) {
        const novaNota = new Nota(titulo, descricao, categoria);
        this.notas.push(novaNota);
    }

    removerNota(indice) {
        this.notas.splice(indice, 1);
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}