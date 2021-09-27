import React from 'react';
import './styles.css';
class NoteCategorias extends React.Component {

    handleSelecionarCategoria(index) {
        this.props.categoriaSelecionada(index);
    }

    render() {
        return(
            <ul className="catego-list">
                {this.props.categorias.map((catego, index) => (
                    <li 
                        key={index}
                        className={index === this.props.categoriaAtual ?
                        "selected" : ""}
                        onClick={() => this.handleSelecionarCategoria(index)}>
                        {catego}
                    </li>
                ))}
            </ul>
        );
    };
}

export default NoteCategorias;