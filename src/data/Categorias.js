export default class Categorias {
    constructor() {
        this.categorias = ["Todos"];
        this.inscritos = [];
    }

    criarCategoria(categoria) {
        this.categorias.push(categoria);
        this.notificar();
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.categorias, this.categoriaSelecionada));
    }
}