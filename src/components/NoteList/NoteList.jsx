import React from 'react';

import NoteItem from '../NoteItem/NoteItem';
import './styles.css';
class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: [], 
            notasFiltradas: []
        };
        this.novasNotas = this.novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this.novasNotas, this.filtroNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this.novasNotas, this.filtroNotas);
    }

    novasNotas(notas) {
        this.setState({...this.state, notas});
    }

    filtroNotas(notasFiltradas) {
        this.setState({...this.state, notasFiltradas});
    }

    // handleFiltrarNotas(categoria) {
    //     this.setState({...this.state, notasFiltradas: this.props.filtarNotas(categoria)});
    // }

    render() {
        return (
            <ul className="note-list">
                {this.state.notas.map((nota, index) => (
                    <li key={index} onClick={() => console.log(this.state.notasFiltradas)} >
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