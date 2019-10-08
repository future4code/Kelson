import React from 'react';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import FormFinal from './formFinal';
import {value} from './form1'
import {value2} from './form2'
import {value3} from './form3'

class App extends React.Component {
  constructor(props){
    super (props)

    this.state = { contr: 0 }
  }

  controler = () =>{
    this.setState({contr: value})
  }
  controler2 = () =>{
    this.setState({contr: value2})
  }
  controler3 = () =>{
    this.setState({contr: value3})
  }
  render(){
    const form = ()=>{ switch (this.state.contr){
                case 0 : 
                  return <Form1 enviar={()=>{this.controler()}}/>;
                case 1 : 
                  return <Form2 enviar2={()=>{this.controler2()}}/>;
                case 2 :
                  return <Form3 enviar3={()=>{this.controler3()}}/>;
                case 3 : 
                return <FormFinal/>;
                }
              }
    return (
      <div className="App">
        {form()}
      </div>
    );
  }
}

export default App;
