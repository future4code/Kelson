import React from 'react';
import './App.css';
import CaixaImagem from './CaixaImagem'
import avatar from './img/comment_icon.svg'

function App() {
  return (
    <div className="App">
      <CaixaImagem user="user1" avatar={avatar}/>
      <CaixaImagem user="user2" avatar={avatar}/>
      <CaixaImagem user="user1" avatar={avatar}/>
    </div>
  );
}

export default App;
