import React from 'react';
import CaixaImagem from './CaixaImagem';
import Formulario from './FormularioPost';
import styled from 'styled-components';

const AppContener = styled.div`
  display: grid;
  justify-content: center;
`

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      postsAtuais: [],
    }
  };

  atualizarPosts = (Post) => {
      const newPosts = [Post , ...this.state.postsAtuais]
        this.setState({postsAtuais: newPosts})};

  render(){
    const imgPosts = this.state.postsAtuais.map(post=> {return <CaixaImagem user={post.name} avatar={post.avatar} img={post.img}/> } )
    return (
      <AppContener>
        {imgPosts}
        <Formulario atualizarPosts={this.atualizarPosts}/>
      </AppContener>
    );
  }
}
export default App;

