import React from 'react';

import NoteItem from '../NoteItem/NoteItem';
import './styles.css';
class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notas: []};
        this.novasNotas = this.novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this.novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this.novasNotas);
    }

    novasNotas(notas) {
        this.setState({...this.state, notas});
    }

    render() {
        return (
            <ul className="note-list">
                {this.state.notas.map((nota, index) => (
                    <li key={index}>
                        <NoteItem 
                            titulo={nota.titulo} 
                            texto={nota.descricao}
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