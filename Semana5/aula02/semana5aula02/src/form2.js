import React from 'react';


class Form2 extends React.Component {
    constructor(props){
        super(prosp)

        this.state({ curso: '',
                     unidade: '',
                    })
    }

    changeCurso = (event) =>{
        this.setState({curso: event.target.value})
    }

    changeUnidade = (event) =>{
        this.setState({unidade: event.target.value})
    }

    
    render(){
        return (
            <div className="App">
                <label>Qual o curso? </label>
                <input type='text' value={this.state.curso} onChange={this.changeCurso}/>
                <label>Qual a unidade de ensino?  </label>
                <input type='text' value={this.state.unidade} onChange={this.changeUnidade}/>
                <button>Enviar</button>
            </div>
        );
    }
}

export default Form2;