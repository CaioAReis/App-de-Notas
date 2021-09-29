import React from 'react';
import './styles.css';
class NoteCategorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categorias: []};
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias.bind(this));
    }

    novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    handleSelecionarCategoria(index, categoria) {
        this.props.categoriaSelecionada(index, categoria);
    }

    render() {
        return(
            <ul className="catego-list">
                {this.state.categorias.map((catego, index) => (
                    <li 
                        key={index}
                        className={index === this.props.categoriaAtual ?
                        "selected" : ""}
                        onClick={() => this.handleSelecionarCategoria(index, catego)}>
                        {catego}
                    </li>
                ))}
            </ul>
        );
    };
}

export default NoteCategorias;