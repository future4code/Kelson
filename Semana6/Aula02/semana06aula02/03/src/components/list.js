import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class List extends React.Component  {
  constructor(props){
    super(props)

    this.state = {users: []}
  }

  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers = () =>{
    const request = axios.get( 'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers' ,
    { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})
  
    request.then((response) => {
        const user = response.data.result
        const users = [...user]
        this.setState({users})
    }).catch((error) => {
        console.log(error)
        window.alert("Erro ao buscar dados.")
    })
  }

   deleteUser = (id) =>{
    const request = axios.delete( `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}` ,
    { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})
  
    request.then((response) => {
        window.alert("Usuario deletado com sucesso.")
    }).catch((error) => {
        console.log(error)
        window.alert("Erro ao deletar usario.")
    }).then(this.getAllUsers)


  }

  render(){
    const list = this.state.users.map((user)=> {return (<div><li>{user.name}</li> <button onClick={()=>this.deleteUser(user.id)}>X</button></div>) })
    
    
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