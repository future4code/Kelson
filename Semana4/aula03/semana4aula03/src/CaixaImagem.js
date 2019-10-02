import React from 'react';
import './App.css';
import like from './img/favorite-white.svg'

class CaixaImagem = (props) => {
    constructor (props){
        super(props);

        this.state ={
            like: {like},
            booLike: false,
            numbLike: 0,
            booComent: false,
            numbComent: 0,   
            value: "",     }
    }

    function like() {
        const lik = !booLike;
        
        if (lik === true){
            this.setState( {numbLike: 1,
                            like: {dlike},
                            } ) 
            
        }
        else{
            this.setState( {numbLike: 0,
                            like: {like},
                            } ) 
        }
    }

    function  commit(){
        const numb = numbComent;
        this.setState( {numbComent : numb + 1,
                        booComent : false,
                        value : "",
                     } )
    }

    function mostrar(){
        this.setState( {booComent : true} )
    }

    render() {
        const axi = this.state.booComent;
        if(axi === true){
            const input = <input placeholder="Escreva um comentario" value={this.state.value}/> <button onClick={commit()} ></button>
        }
        else{
            const input = "";
        }
        return (
            <div className="caixa">
                <header>
                    <img scr={this.porps.avatar} alt='avatar'/>
                    <p> {this.props.user} </p>
                </header>
                <img src="" alt="post"/>
                <foottr>
                    <div>
                        <button onClick={like()} ><img scr={ this.state.like } alt="Like"/></button>
                        <p> { this.state.numbLike } </p>
                    </div>
                    <div>
                        <button onClick={mostrar()} ><img src={this.props.comente} alt="Comente"/></button>
                        <p> {this.stete.numbComent} </p>
                    </div>
                </foottr>
            </div>
        );
    };
}

export default CaixaImagem;