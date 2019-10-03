import React from 'react';
import styled from 'styled-components';
import App from './App';

let test = []

const FormularioContener = styled.div`
`

const Name = styled.div`
`

const Avatar = styled.div`
`

const Imagempost = styled.div`
`

class Formulario extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            valueName:'',
            valueImg:'',
            valueAvatar:'',
            posts: [], 
        }
    }

    changeName = (event) => {
        this.setState({valueName: event.target.value})
    }

    changeAvatar = (event) => {
        this.setState({valueAvatar: event.target.value})
    }

    changeImg = (event) => {
        this.setState({valueImg: event.target.value})
    }

    criarPost = () => {
        const newPost = {
            nome: this.valueName,
            avatar: this.valueAvatar,
            img: this.valueImg 
        }
        const newPosts = [newPost , ...this.state.posts]
        this.setState({posts: newPosts})
        App.atualizarPosts()
        test = this.state.posts;
    }



    render(){
        return (
            <FormularioContener>
                <Name>
                    <label>Nome:</label>
                    <input placeholder='Nome' type='text' value={this.valueName} onChange={ this.changeName}/>
                </Name>
                <Avatar>
                    <label>Link do Avatar:</label>
                    <input placeholder='Avatar' type='url' value={this.valueAvatar} onChange={this.changeAvatar}/>
                </Avatar>
                <Imagempost>
                    <label>Link da Imagem:</label>
                    <input placeholder='Avatar' type='url' value={this.valueImg} onChange={ this.changeImg}/>
                </Imagempost>
                <button onClick={this.criarPost}>Criar</button>
            </FormularioContener>
        );
    };
}

export default Formulario
export { test };
