import React from 'react';
import styled from 'styled-components'

const NewTaskDiv = styled.div`
    margin: 4vw;
    border: 1px solid black;
    display:flex;
    justify-content: center;
    align-items: center;
    `

class NewTask extends React.Component {
    constructor(props){
        super(props)

        this.state = { valuetask : ''}
    }

        
    
    changeValue = (event) => {
         
        this.setState({ valueTask : event.target.value })
    }

    render(){
        return (
            <NewTaskDiv>
                <input type='text' 
                placeholder="Nova Tarefa" 
                value={this.valueTask} 
                onChange={this.changeValue} 
                />
                <button onClick = { () => { this.props.salveTask(this.state.valueTask) } }/>
            </NewTaskDiv>
        );
    }
}

export default NewTask;