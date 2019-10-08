import React from 'react';

let value2 = 0
class Form2 extends React.Component {
    constructor(props){
        super(props)

        this.state = { curso: '',
                     unidade: '',
                    }
    }

    changeCurso = (event) =>{
        this.setState({curso: event.target.value})
    }

    changeUnidade = (event) =>{
        this.setState({unidade: event.target.value})
    }

    enviar = () =>{
            value2 = 1
            this.props.enviar2()
    }

    
    render(){
        return (
            <div className="App">
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <label>1. Qual o curso? </label><br/>
                <input type='text' value={this.state.curso} onChange={this.changeCurso}/>
                <br/>
                <label>2. Qual a unidade de ensino? </label><br/>
                <input type='text' value={this.state.unidade} onChange={this.changeUnidade}/>
                <br/>
                <button onClick={this.enviar}>Enviar</button>
            </div>
        );
    }
}
export {value2};
export default Form2;