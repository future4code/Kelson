import React from 'react';
import styled from 'styled-components'
import NewTask from './NovaTarefa'
import ListTask from './ListTask'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { tasks : [] }
  }
  salveTask = (valueTask) =>{
    const task = { valueTask : valueTask,
                   state : "open",
                   id : (this.state.tasks.length)}
    const list = [...this.state.tasks, task]
    this.setState({tasks: list})
  } 

  render(){
      return (
        <div className="App">
          <NewTask salveTask={this.salveTask} />
          <list>
            <ListTask title="Tarefas em aberto" list={this.state.tasks} state="open"/>
            <ListTask title="Tarefas finalizadas" list={this.state.tasks} state="done"/>
          </list>
        </div>
      );
    }
}

export default App;
