export default class Categorias {
    constructor() {
        this.categorias = ["Todos"];
        this.categoriaSelecionada = 0;
        this.inscritos = [];
    }

    criarCategoria(categoria) {
        this.categorias.push(categoria);
        this.notificar();
    }

    selecionarCategoria(indice) {
        this.categoriaSelecionada = indice;
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    desinscrever(func) {
        this.inscritos = this.inscritos.filter(f => f !== func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.categorias));
    }
}