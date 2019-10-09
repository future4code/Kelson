import React from 'react';

let value = 0

class Form1 extends React.Component {
    constructor(props){
        super(props)

        this.state = { name: '',
                     age: '',
                     email: '',
                     grau: '',
                     value: 0,
                    }
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

    enviar = () =>{
        if (this.state.grau === 'True'){
            value = 1
            this.props.enviar()
        } else{
            value = 2
            this.props.enviar()
        }
    }
    
    render(){
        return (
            <div className="App">
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <label>1. Nome: </label><br/>
                <input type='text' value={this.state.name} onChange={this.changeName}/>
                <br/>
                <label>2. Idade: </label><br/>
                <input type='text' value={this.state.age} onChange={this.changeAge}/>
                <br/>
                <label>3. Email: </label><br/>
                <input type='email' value={this.state.email} onChange={this.changeEmail}/>
                <br/>
                <label>4. Qual o grau de escolaridade: </label><br/>
                <select value={this.state.grau} onChange={this.changeGrau}>
                    <option value=''></option>
                    <option value='false'>Ensino Médio Incompleto</option>
                    <option value='false'>Ensino Médio Completo</option>
                    <option value='True'>Ensino Superior Incompleto</option>
                    <option value='True'>Ensino Superior Completo</option>
                </select>
                <br/>
                <button onClick={this.enviar}>Enviar</button>
            </div>
        );
    }
}
export {value};
export default Form1;

