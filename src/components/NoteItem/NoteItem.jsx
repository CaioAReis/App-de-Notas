import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './styles.css';
class NoteItem extends React.Component {

    handleRemover(indexNota) {
        this.props.removerNota(indexNota);
    }

    render() {
        return (
            <div className="item-list">
                <h3>{this.props.titulo}</h3>     
                <p>{this.props.texto}</p>
                <span onClick={() => this.handleRemover(this.props.indexNota)}> 
                    <FaTrashAlt size={30} title="Remover"/> 
                </span>
            </div>
        );
    }
}

export default NoteItem;