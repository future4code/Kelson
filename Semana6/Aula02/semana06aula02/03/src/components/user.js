import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

class User extends React.Component  {
  constructor(props){
    super(props)

    this.state = {name: '',
                  email: ''}
  }

  getUser = async () => {
    try{
        const request = await axios.post( `https://us-central1-future4-users.cloudfunctions.net/api//users/getUser/${this.props.id}`,
                                { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})
        this.setState({name: request.data.result.name,
                       email: request.data.result.email})
    } catch{
        alert("Erro ao carregar dados")
      }
  }

  render(){
    return (
      <div className="App">
          <button onClick={this.props.open}>Ir para Lista</button>
          <div>
                <h3>Usuario</h3>
                <label>Nome: </label>
                <p>{this.state.name}</p>/
                <label>E-mail: </label>
                <p>{this.state.email}</p>
                <button onClick={this.props.del}>Deletar</button>
          </div>
      </div>
    );
  }
}

export default User;