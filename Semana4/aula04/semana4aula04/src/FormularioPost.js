import React from 'react';
import styled from 'styled-components';

const FormularioContener = styled.div`
    display:grid;
    gap: 0.6vh;
    border: 1px solid black;
    padding: 1vw;
    `

const Name = styled.div`
    display:flex;
    justify-content:space-between;
    `

const Avatar = styled.div`
     display:flex;
    justify-content:space-between;
    `

const Imagempost = styled.div`
    display:flex;
    justify-content:space-between;
    `

const FormButton = styled.button`
    border: 1px solid black;
    background-color: white; 
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
            name: this.state.valueName,
            avatar: this.state.valueAvatar,
            img: this.state.valueImg 
        }
        this.props.atualizarPosts(newPost)
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
                <FormButton onClick={this.criarPost}>Criar</FormButton>
            </FormularioContener>
        );
    };
}

export default Formulario;
