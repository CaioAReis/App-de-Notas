import React from 'react';

import NoteForms from './components/NoteForms/NoteForms';
import NoteList from './components/NoteList/NoteList';
import NoteCategorias from './components/Notecategorias';

import './styles.css';
import {FaStickyNote} from 'react-icons/fa';
import Categorias from './data/Categorias';
import ArrayNotas from './data/ArrayNotas';

// import { ReactComponent as NoteImg } from './assets/img/note-text.svg';
class App extends React.Component {

  constructor() {
    super();
    this.categoria = new Categorias();
    this.notas = new ArrayNotas();
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = {titulo, texto, categoria};
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas:novoArrayNotas,
  //     novoArrayNotas: this.state.categoriaSelecionada === 0 ? novoArrayNotas :
  //       novoArrayNotas.filter(nota => nota.categoria === 
  //         this.state.categorias[this.state.categoriaSelecionada])
  //   }
  //   this.setState(novoEstado);
  // }

  // selecionarCategoria(index, categoria) {
  //   this.setState({categoriaSelecionada: index});
  //   let novoArray = this.state.notas;
  //   if (categoria !== "Todos") {
  //     novoArray = novoArray.filter(nota => nota.categoria === categoria);
  //   }
  //   this.setState({novoArrayNotas: novoArray});
  // }

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
              criarNota={this.notas.criarNota.bind(this.notas)}
              criarCategoria={this.categoria.criarCategoria.bind(this.categoria)}
              categorias={this.categoria}
              selecionarCategoria={
                this.categoria.selecionarCategoria.bind(this.categoria)
              }
            />
            <section className="notes-list">
              <NoteCategorias
                filtrarNotas={this.notas.filtarNotas.bind(this.notas)}
                categorias={this.categoria}
                selecionarCategoria={
                  this.categoria.selecionarCategoria.bind(this.categoria)
                }
              />
              <NoteList 
                notas={this.notas}
                selecionarCategoria={
                  this.categoria.selecionarCategoria.bind(this.categoria)
                }
                removerNota={this.notas.removerNota.bind(this.notas)}
              />
            </section>
         </section>
      </div>
    );
  }
}

export default App;