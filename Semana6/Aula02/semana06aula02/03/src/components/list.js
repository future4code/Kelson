import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class List extends React.Component  {
  constructor(props){
    super(props)

    this.state = {users: []}
  }

  render(){
    const list = this.state.users.map((user)=> {return (<li>{user}</li>) })
    
    
    return (
      <div className="App">
            <button onClick={this.props.open}>Ir para Cadastro</button>
            <div>
                <h3>Usuários Cadastrados:</h3>
                <ul>
                    {list}
                </ul>
            </div>
      </div>
    );
  }
}

export default List;