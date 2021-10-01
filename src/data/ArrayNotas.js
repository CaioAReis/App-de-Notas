export default class ArrayNotas {
    constructor() {
        this.geral = [];
        this.notas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas));
    }

    criarNota(titulo, descricao, categoria) {
        const novaNota = new Nota(titulo, descricao, categoria);
        if (this.geral.length === 0) {
            this.geral.push(novaNota);
            this.notas.push(novaNota);
        } else {
            this.geral.push(novaNota);
            this.filtarNotas("Todos");
        }
        this.notificar();
    }

    removerNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    filtarNotas(categoria) {
        let novoArray = this.geral;
        if (categoria !== "Todos") {
            novoArray = novoArray.filter(nota => nota.categoria === categoria);
        }
        this.notas = novoArray;
        this.notificar();
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}