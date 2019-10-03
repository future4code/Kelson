import React from 'react';
import './App.css';
import CaixaImagem from './CaixaImagem';

import Formulario from './FormularioPost';
import {test} from './FormularioPost'


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      postsAtuais: []
    }
  };

  atualizarPosts = () => {this.setState({postsAtuais: test})};

  render(){
    const imgPosts = this.state.postsAtuais.map(test=> {return <CaixaImagem user={test.name} avatar={test.avatar} img={test.img}/> } )
    return (
      <div className="App">
        {imgPosts}
        <Formulario/>
      </div>
    );
  }
}
export default App;

