import React from 'react';


class Form1 extends React.Component {
    constructor(props){
        super(prosp)

        this.state({ name: '',
                     age: '',
                     email: '',
                     grau: '',
                    })
    }

    changeName = (event) =>{
        this.setState({name: event.target.value})
    }

    changeAge = (event) =>{
        this.setState({age: event.target.value})
    }

    changeEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    
    changeGrau = (event) =>{
        this.setState({grau: event.target.value})
    }
    
    render(){
        return (
            <div className="App">
                <label>Nome:</label>
                <input type='text' value={this.state.name} onChange={this.changeName}/>
                <label>Idade:</label>
                <input type='text' value={this.state.age} onChange={this.changeAge}/>
                <label>Email:</label>
                <input type='email' value={this.state.email} onChange={this.changeEmail}/>
                <label>Qual o grau de escolaridade:</label>
                <select value={this.state.grau} onChange={this.changeGrau}>
                    <option value=''></option>
                    <option value='false'>Ensino Médio Incompleto</option>
                    <option value='false'>Ensino Médio Completo</option>
                    <option value='true'>Ensino Superior Incompleto</option>
                    <option value='true'>Ensino Superior Completo</option>
                </select>
                <button>Enviar</button>
            </div>
        );
    }
}

export default Form1;
