export default class Categorias {
    constructor() {
        this.categorias = ["Todos"];
        this.categoriaSelecionada = 0;
        this.inscritos = [];
    }

    criarCategoria(categoria) {
        alert("Categoria criada!!" + categoria)
        this.categorias.push(categoria);
    }

    selecionarCategoria(indice) {
        this.categoriaSelecionada = indice;
    }

    inscrever(func) {
        this.inscritos.push(func);
    }

    notificar() {
        this.inscritos.forEach(func => func(this.categorias));
    }
}