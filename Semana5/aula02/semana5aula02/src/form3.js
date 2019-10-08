import React from 'react';


class Form3 extends React.Component {
    constructor(props){
        super(prosp)

        this.state({ why: '',
                     compl: '',
                    })
    }

    changeWhy = (event) =>{
        this.setState({why: event.target.value})
    }
    
    changeCompl = (event) =>{
        this.setState({compl: event.target.value})
    }
    
    render(){
        return (
            <div className="App">
                <label>Por que você não terminou um curso de graduação?</label>
                <input type='text' value={this.state.why} onChange={this.changeWhy}/>
                <label>Você fez algum curso complementar?</label>
                <select value={this.state.grau} onChange={this.changeGrau}>
                    <option value=''></option>
                    <option value='Tecn'>Curso técnico</option>
                    <option value='Eng'>Cursos de inglês</option>
                    <option value='NO'>Não fiz nem curso complementar</option>
                </select>
                <button>Enviar</button>
            </div>
        );
    }
}

export default Form3;