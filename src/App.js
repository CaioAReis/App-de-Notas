import React from 'react';

import NoteForms from './components/NoteForms/NoteForms';
import NoteList from './components/NoteList/NoteList';
import NoteCategorias from './components/Notecategorias';

import './styles.css';
import {FaStickyNote} from 'react-icons/fa';

// import { ReactComponent as NoteImg } from './assets/img/note-text.svg';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  removerNota(indexNota) {
    const novoArrayNotas = this.state.notas
      .filter((nota, index) => index !== indexNota);
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  criarCategoria(categoria) {
    const novoArrayCategorias = [...this.state.categorias, categoria];
    const novoEstado = {
      categorias: novoArrayCategorias
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="App-container">
        <h1 style={{
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center'
          }}>
            App de notas 
            <FaStickyNote style={{marginLeft: 20}} color='aqua' />
            {/* <NoteImg /> */}
        </h1>
        
         <section className="main-container">
            <NoteForms 
              criarNota={this.criarNota.bind(this)}
              criarCategoria={this.criarCategoria.bind(this)}
            />
            <section className="notes-list">
              <NoteCategorias 
                categorias={this.state.categorias}
              />
              <NoteList 
                notas={this.state.notas} 
                removerNota={this.removerNota.bind(this)}
              />
            </section>
         </section>
      </div>
    );
  }
}

export default App;