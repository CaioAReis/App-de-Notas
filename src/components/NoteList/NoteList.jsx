import React from 'react';

import NoteItem from '../NoteItem/NoteItem';
import './styles.css';
class NoteList extends React.Component {
    render() {
        return (
            <ul className="note-list">
                {this.props.notas.map((nota, index) => (
                    <li key={index}>
                        <NoteItem 
                            titulo={nota.titulo} 
                            texto={nota.texto}
                            categoria={nota.categoria}
                            indexNota={index}
                            removerNota={this.props.removerNota}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default NoteList;