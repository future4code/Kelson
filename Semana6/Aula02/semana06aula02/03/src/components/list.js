import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import User from './user';

class List extends React.Component  {
  constructor(props){
    super(props)

    this.state = {users: [],
                  viewUser: false}
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
    }).catch(() => {
        window.alert("Erro ao buscar dados.")
    })
  }

    deleteUser = (id) =>{
      if(window.confirm("Tem certeza de que deseja deletar?")){
        const request = axios.delete( `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}` ,
        { headers: { 'api-token': '7e06037146ee8282cd257e100d436f97'}})
      
        request.then(() => {
            window.alert("Usuario deletado com sucesso.")
        }).catch(() => {
            window.alert("Erro ao deletar usario.")
        }).then(this.getAllUsers)
      }
    }

    changeViewUser = () =>{
    const value = !this.state.viewUser
    this.setState({viewUser: value})
    }


  render(){
    const list = this.state.users.map((user)=> {if(this.state.viewUser){
                                                  return <User del={this.deleteUser} id={user.id} open={this.props.open}/>}
                                                else {
                                                  return (<div><li onClick={this.changeViewUser}>{user.name}</li> <button onClick={()=>this.deleteUser(user.id)}>X</button></div>) 
                                                }
                                      })
                                                
    
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