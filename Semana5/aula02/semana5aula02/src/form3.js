import React from 'react';

let value3 = 0
class Form3 extends React.Component {
    constructor(props){
        super(props)

        this.state = { why: '',
                     compl: '',
                    }
    }

    changeWhy = (event) =>{
        this.setState({why: event.target.value})
    }
    
    changeCompl = (event) =>{
        this.setState({compl: event.target.value})
    }

    enviar = () =>{
        value3 = 3
        this.props.enviar3()
}
    
    render(){
        return (
            <div className="App">
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <label>1. Por que você não terminou um curso de graduação? </label><br/>
                <input type='text' value={this.state.why} onChange={this.changeWhy}/>
                <br/>
                <label>2. Você fez algum curso complementar? </label><br/>
                <select value={this.state.grau} onChange={this.changeGrau}>
                    <option value=''></option>
                    <option value='Tecn'>Curso técnico</option>
                    <option value='Eng'>Cursos de inglês</option>
                    <option value='NO'>Não fiz nem curso complementar</option>
                </select>
                <br/>
                <button onClick={this.enviar}>Enviar</button>
            </div>
        );
    }
}
export {value3};
export default Form3;