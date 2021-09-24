import React from 'react';
import './styles.css';
class NoteForms extends React.Component {

    constructor(props) {
        super(props);
        this.titulo = '';
        this.nota = '';
    }

    handleNota(event) {
        event.stopPropagation();
        this.nota = event.target.value;
    }

    handleTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleCriarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

    render() { 
        return (
            <form className="note-form" onSubmit={this.handleCriarNota.bind(this)}>
                <input type="text" 
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
        );
    }
}
 
export default NoteForms;