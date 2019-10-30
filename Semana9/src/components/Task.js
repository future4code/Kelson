
import React from 'react';
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { updateState, deleteTask, updateStateIdl, deleteTaskIdl } from '../actions/Actions ';
import styled from 'styled-components'

const MainContenner = styled.div`
	display:flex;
	justify-content: space-between;
`


class Task extends React.Component {
	constructor(props) {
		super(props)

	}

	handleChange = () =>{
        this.props.updateStateIdl(this.props.data.id)
	}
	onClikDeleteTask = () =>{
		this.props.deleteTaskIdl(this.props.data.id)
	}

	render() {
		console.log(this.props.data)
		console.log(this.props.data.done)
    return (
        <MainContenner>
             <input
			 	type='checkbox'
				checked={this.props.data.done}
                onChange={this.handleChange}
            />
            <p>{this.props.data.text}</p>
            <button onClick={this.onClikDeleteTask}>X</button>
            
        </MainContenner>
    )
}
}

const mapStateToProps = state => {
	return{
		tasks: state.tasks.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return {
	  updateState: id => dispatch(updateState(id)),
	  deleteTask: id => dispatch(deleteTask(id)),
	  updateStateIdl: id => dispatch(updateStateIdl(id)),
	  deleteTaskIdl: id => dispatch(deleteTaskIdl(id))
	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(Task)