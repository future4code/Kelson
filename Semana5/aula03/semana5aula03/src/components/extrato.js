import React from 'react';


class Extrato extends React.Component {
    constructor(props){
        super(props)

        this.state = { minimo: '',
        maximo: '',
        tipo: '',
       }
    }

    changeMaximo = (event) =>{
    this.setState({maximo: event.target.value})
    }

    changeMin = (event) =>{
    this.setState({minimo: event.target.value})
    }

    changeType = (event) =>{
    this.setState({tipo: event.target.value})
    }


    render(){
        const despesa = <p></p>
        return (
            <div className="App">
                <h2>Cadastro de Despesas</h2>
                <label>Valor Maximo: </label><br/>
                <input type='text' value={this.state.valor} onChange={this.changeValor}/>
                <br/> 
                <label>Valor Minimo </label><br/>
                <input type='text' value={this.state.descrição} onChange={this.changeDes}/>
                <br/>
                <label>Tipo</label><br/>
                <select value={this.state.tipo} onChange={this.changeType}>
                    <option value=''></option>
                    <option value='false'>Casa</option>
                    <option value='false'>Ensino</option>
                    <option value='True'>Ferias</option>
                </select>
                <button onClick={this.filtar}>filtrar</button><br/>
                {despesa}
                <label>Total</label>
                <p>{this.total}</p>
                <button onClick={this.page}>voltar</button>
            </div>
        );
    }
}

export default Extrato;