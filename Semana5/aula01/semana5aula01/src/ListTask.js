import React from 'react';
import styled from 'styled-components'
import ItemList from './itemList.js'

class ListTask extends React.Component {
  render(){
      const list = this.props.list.map( task => {if(task.state === this.props.state){
                                                 return <ItemList task={this.task.value} id={this.task.id}/> }
      })
      return (
        <div>
            <h2>{this.props.title}</h2>
            <ul>
                {list}
            </ul>
        </div>
      );
    }
}

export default ListTask;