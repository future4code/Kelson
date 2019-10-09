import React from 'react';
import styled from 'styled-components'

class ItemList extends React.Component {
    constructor(props){
        super(props)
    
        this.state = { task : this.props.task,
                       edt: false }
    }

    editar = (event) => {
        if (this.state.edt === true){
            this.setState({task : event.target.value})
        }
    }

    edita = ()=> {
        const value = !this.state.edt
        this.setState({edt : value})
    }

    render(){
      return (
        <li>
            <input type="text" value={this.state.task} onChange={this.editar} />
            <button onClick={() => this.edita}>Editar</button>
        </li>
      );
    }
}

export default ItemList;