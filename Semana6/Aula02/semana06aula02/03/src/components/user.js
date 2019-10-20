import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

class User extends React.Component  {
  constructor(props){
    super(props)

    this.state = {name: '',
                  email: '',
                  edit: true}
  }

  componentDidMount(){
    this.getUser()
    this.edit()
  }

  getUser = async () => {
    try{
        const request = await axios.get( `https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${this.props.id}`,
                                { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}
                                })                   
        this.setState({name: request.data.result.name,
                       email: request.data.result.email})
    } catch{
        alert("Erro ao carregar dados")
      }
  }

  changeName = (event) =>{
    this.setState({name: event.target.value})
  }

  changeEmail = (event) =>{
    this.setState({email: event.target.value})
  }

  edit = () => {
    const value = !this.state.edit
    this.setState({edit: value})
  }

  save = () => {
    const data = {
      id:this.props.id,
      name: this.state.name,
      email: this.state.email
  }
  const request = axios.put( 'https://us-central1-future4-users.cloudfunctions.net/api/users/editUser' ,
                               data, { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})

  request.then(() => {
      window.alert("Edição realizada com sucesso.")
  }).catch(() => {
      window.alert("Erro ao enviar dados.")
  })
  this.edit()
}

  render(){
    return (
      <div className="App">
          <button onClick={this.props.open}>Ir para Lista</button>
          <div>
                <h3>Usuario</h3>
                <label>Nome: </label>
                { this.state.edit? <input value={this.state.name} onChange={this.changeName}/> : <p>{this.state.name}</p>}
                <label>E-mail: </label>
                { this.state.edit? <input value={this.state.email} onChange={this.changeEmail}/> : <div><p>{this.state.email}</p> <button onClick={()=> this.props.del(this.props.id)}>Deletar</button> </div>}
                { this.state.edit? <button onClick={this.save}>Salvar</button> : <button onClick={this.edit}>Editar</button>}
          </div>
      </div>
    );
  }
}

export default User;