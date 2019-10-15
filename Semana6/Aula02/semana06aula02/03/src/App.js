import React from 'react';
import axios from 'axios';
import Record from './components/record';
import List from './components/list';


class App extends React.Component  {
  constructor(props){
    super(props)

    this.state = {viewlist: false}
  }

  openList = () => {
    const value = !this.state.viewlist
    this.setState({viewlist: value})
  }

  render(){
    return (
      <div className="App">
        {this.state.viewlist? <List open={this.openList}/> : <Record open={this.openList}/>}
      </div>
    );
  }
}

export default App;
