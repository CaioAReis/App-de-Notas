export default class ArrayNotas {
    constructor() {
        this.notas = [];
        this.filtroNotas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.notas, this.filtroNotas));
    }

    criarNota(titulo, descricao, categoria) {
        const novaNota = new Nota(titulo, descricao, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    removerNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    filtarNotas(categoria) {
        // alert("ENTROU AQUI SAMERDA!! " + categoria);
        let novoArray = this.notas;
        if (categoria !== "Todos") {
            novoArray = novoArray.filter(nota => nota.categoria === categoria);
        }
        this.filtroNotas = novoArray;
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