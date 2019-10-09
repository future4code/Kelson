import React from 'react';
import Cadastro from './components/cadastro'
import Extrato from './components/extrato';


function App() {
  return (
    <div className="App">
      <Cadastro/>
      <hr></hr>
      <Extrato></Extrato>
    </div>
  );
}

export default App;
