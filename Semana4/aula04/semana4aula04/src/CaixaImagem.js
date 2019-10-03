import React from 'react';
import like from './img/favorite-white.svg';
import dlike from './img/favorite.svg';
import comente from './img/comment_icon.svg';
import styled from 'styled-components';

const Caixa = styled.div`
   display: grid;
    border: 1px solid black;
    margin:1vw;
    `

const CaixaHeader = styled.header`
    display: flex;
    justify-content: left;
    align-items: center;
    `

const CaixaButton = styled.button`
    border: 0;
    background-color: white; 
    `

const CaixaFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    `
const Foot = styled.div`
    display:flex;
    margin: 0.5vw;
    `

const ButtonCom = styled.button`
    border: 1px solid black;
    background-color: white; 
    `

const Comente = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5vw;
    `

const CaixaImg = styled.img`
    height: 450px;
    width: 450px;
    `
    const Avatarimg = styled.img`
    margin: 0.4vh;
    height: 20px;
    width: 20px;
    `


class CaixaImagem extends React.Component {
    constructor (props){
        super(props);

        this.state ={
            like: like,
            booLike: true,
            numbLike: 0,
            booComent: false,
            numbComent: 0,   
            value: "",     }
    }

    like() {
        const lik = this.state.booLike;
        if ((lik) === true){
            this.setState( {numbLike: 1,
                            like: dlike,
                            booLike: false,
                            } ) 
            
        }
        else if (lik === false){
            this.setState( {numbLike: 0,
                            like: like,
                            booLike: true,
                            } ) 
        }
    }

    commit(){
        const numb = this.state.numbComent;
        this.setState( {numbComent : numb + 1,
                        booComent : false,
                        value : "",
                     } )
    }

    mostrar(){
        this.setState( {booComent : true} )
    }

    render() {
        const axi = this.state.booComent;
        let input
        if(axi === true){
            input = <Comente ><input placeholder="Escreva um comentario" value={this.state.value}/> <ButtonCom onClick={()=>{this.commit()}} >Comentar</ButtonCom></Comente>
        }
        else{
            input = "";
        }
        return (
            <Caixa>
                <CaixaHeader>
                    <Avatarimg src={this.props.avatar} alt='avatar'/>
                    <p> {this.props.user} </p>
                </CaixaHeader>
                <CaixaImg src={this.props.img} alt="post"/>
                <CaixaFooter>
                    <Foot>
                        <CaixaButton onClick={() => {this.like()}} ><img src={ this.state.like } alt="Like"/></CaixaButton>
                        <p> { this.state.numbLike } </p>
                    </Foot>
                    <Foot>
                        <CaixaButton onClick={() => {this.mostrar()}} ><img src={comente} alt="Comente"/></CaixaButton>
                        <p> {this.state.numbComent} </p>
                    </Foot>      
                </CaixaFooter>
                {input}
            </Caixa>
        );
    };
}

export default CaixaImagem;