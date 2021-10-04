export default class ArrayNotas {
    constructor() {
        this.atual = "Todos";
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
        const novaNota = new Nota(titulo, descricao, categoria, this.geral.length);
        if (this.geral.length === 0) {
            this.geral.push(novaNota);
            this.filtarNotas(this.atual);
        } else {
            this.geral.push(novaNota);
            this.filtarNotas(this.atual);
        }
        console.log(novaNota);
        this.notificar();
    }

    removerNota(indice) {
        const posiGeral = this.notas[indice].posicao;
        this.geral.splice(posiGeral, 1);
        this.geral.forEach((n, i) => n.posicao = i);
        this.filtarNotas(this.atual);
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
    constructor(titulo, descricao, categoria, posicao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.posicao = posicao;
    }
}