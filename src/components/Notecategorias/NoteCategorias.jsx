import React from 'react';
import './styles.css';
class NoteCategorias extends React.Component {
    render() {
        return(
            <ul className="catego-list">
                <li className="selected">Todos</li>
                {this.props.categorias.map((catego, index) => (
                    <li key={index}>{catego}</li>
                ))}
            </ul>
        );
    };
}

export default NoteCategorias;