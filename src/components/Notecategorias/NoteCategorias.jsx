import React from 'react';
import './styles.css';
class NoteCategorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categorias: []};
        this.novasCategorias = this.novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this.novasCategorias);
    }

    novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    handleSelecionarCategoria(index) {
        this.props.filtrarNotas(this.state.categorias[index]);
    }

    render() {
        return(
            <ul className="catego-list">
                {this.state.categorias.map((catego, index) => (
                    <li 
                        key={index}
                        className="selected"
                        onClick={() => this.handleSelecionarCategoria(index)}>
                        {catego}
                    </li>
                ))}
            </ul>
        );
    };
}

export default NoteCategorias;