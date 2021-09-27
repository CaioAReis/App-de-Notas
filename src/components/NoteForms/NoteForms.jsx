import React from 'react';
import './styles.css';
class NoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.titulo = '';
        this.nota = '';
        this.categoriaNota = ''
        this.categoria = '';
    }

    handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleNota(event) {
        event.stopPropagation();
        this.nota = event.target.value;
    }

    handleCategoriaNota(event) {
        event.stopPropagation();
        this.categoriaNota = event.target.value;
    }

    handleCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    handleCriarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.nota, this.categoriaNota);
    }

    handleCriarCategoria(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarCategoria(this.categoria);
    }

    render() { 
        return (
            <section className="form">
                <form 
                    className="note-form" 
                    onSubmit={this.handleCriarNota.bind(this)}>
                    <input 
                        type="text" 
                        placeholder="Título"
                        onChange={this.handleTitulo.bind(this)}
                    />
                    <select onChange={this.handleCategoriaNota.bind(this)} className="categorias-list">
                        {this.props.categorias.map(categoria => (
                            <option value={categoria}>{categoria}</option>
                        ))}
                    </select>
                    <textarea 
                        rows="6"
                        placeholder="Escreva sua nota"
                        onChange={this.handleNota.bind(this)}
                    />
                    <button type="submit" className="button">Criar nota</button>
                </form>
                <form 
                    className="catego-form" 
                    onSubmit={this.handleCriarCategoria.bind(this)}
                >
                    <input 
                        type="text" 
                        placeholder="Criar categoria" 
                        onChange={this.handleCategoria.bind(this)}
                    />
                    <button 
                        className="button"
                        style={{
                            width: 100,
                            position: 'absolute',
                            top: 4, right: 0
                        }}>
                            OK
                    </button>
                </form>
            </section>
        );
    }
}
 
export default NoteForms;