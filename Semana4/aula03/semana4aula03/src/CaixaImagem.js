import React from 'react';
import './App.css';
import like from './img/favorite-white.svg';
import dlike from './img/favorite.svg';
import avatar from './img/comment_icon.svg';
import comente from './img/comment_icon.svg'

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
            input = <div id="comente" ><input placeholder="Escreva um comentario" value={this.state.value}/> <button className="buttonCom" onClick={()=>{this.commit()}} >Comentar</button></div>
        }
        else{
            input = "";
        }
        return (
            <div className="caixa">
                <header>
                    <img src={avatar} alt='avatar'/>
                    <p> {this.props.user} </p>
                </header>
                <img src="https://via.placeholder.com/450" alt="post"/>
                <footer>
                    <div className="foot">
                        <button onClick={() => {this.like()}} ><img src={ this.state.like } alt="Like"/></button>
                        <p> { this.state.numbLike } </p>
                    </div>
                    <div className="foot">
                        <button onClick={() => {this.mostrar()}} ><img src={comente} alt="Comente"/></button>
                        <p> {this.state.numbComent} </p>
                    </div>      
                </footer>
                {input}
            </div>
        );
    };
}

export default CaixaImagem;