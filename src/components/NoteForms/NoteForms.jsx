import React from 'react';
import './styles.css';
class NoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.titulo = '';
        this.nota = '';
        this.categoria = '';
    }

    handleNota(event) {
        event.stopPropagation();
        this.nota = event.target.value;
    }

    handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    handleCriarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
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
                    <textarea 
                        name="" id="" 
                        rows="10"
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
                            top: -16, right: 0
                        }}
                        >OK</button>
                </form>
            </section>
        );
    }
}
 
export default NoteForms;