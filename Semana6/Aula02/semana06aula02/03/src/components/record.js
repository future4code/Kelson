import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

class Record extends React.Component  {
  constructor(props){
    super(props)

    this.state = {name: '',
                  email: ''}
  }

  changeName = (event) =>{
    this.setState({name: event.target.value})
  }

  changeEmail = (event) =>{
    this.setState({email: event.target.value})
  }

  save = () => {
      const data = {
        name: this.state.name,
        email: this.state.email
    }
    const request = axios.post( 'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser' ,
                                 data, { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})

    request.then(() => {
        window.alert("Cadastro realizado com sucesso.")
    }).catch(() => {
        window.alert("Erro ao enviar dados.")
    })
  }

  render(){
    return (
      <div className="App">
          <button onClick={this.props.open}>Ir para Lista</button>
          <div>
                <label>Nome: </label>
                <input value={this.state.name} onChange={this.changeName}/>
                <label>E-mail: </label>
                <input value={this.state.email} onChange={this.changeEmail}/>
                <button onClick={this.save}>Cadastrar</button>
          </div>
      </div>
    );
  }
}

export default Record;