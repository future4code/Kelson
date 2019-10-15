import React from 'react';


class Cadastro extends React.Component {
    constructor(props){
        super(props)

        this.state = { valor: '',
        descrição: '',
        tipo: '',
       }
    }

    changeValor = (event) =>{
    this.setState({valor: event.target.value})
    }

    changeDes = (event) =>{
    this.setState({descrição: event.target.value})
    }

    changeType = (event) =>{
    this.setState({tipo: event.target.value})
    }


    render(){
        return (
        <div className="App">
        <h2>Cadastro de Despesas</h2>
        <label>1. Valor: </label><br/>
        <input type='text' value={this.state.valor} onChange={this.changeValor}/>
        <br/> 
        <label>2. Tipo: </label><br/>
        <select value={this.state.tipo} onChange={this.changeType}>
            <option value=''></option>
            <option value='false'>Casa</option>
            <option value='false'>Ensino</option>
            <option value='True'>Ferias</option>
        </select>
        <br/>
        <label>3. Descrição: </label><br/>
        <input type='text' value={this.state.descrição} onChange={this.changeDes}/>
        <br/>
        <button onClick={this.cadastrar}>Cadastrar</button>
        <button onClick={this.page}>Extrato</button>
        </div>
        );
    }
}

export default Cadastro;