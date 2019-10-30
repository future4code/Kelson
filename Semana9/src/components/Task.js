
import React from 'react';
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { updateState, deleteTask, updateStateIdl, deleteTaskIdl } from '../actions/Actions ';
import styled from 'styled-components'

const MainContenner = styled.div`
	display:flex;
	justify-content: space-between
`


class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checkedA: this.props.data.done
		}
	}

	handleChange = (event) =>{
        this.setState({checkedA: event.target.checked})
        this.props.updateStateIdl(this.props.data.id)
	}
	onClikDeleteTask = () =>{
		this.props.deleteTaskIdl(this.props.data.id)
	}

	render() {
		console.log(this.props.data)
		console.log(this.props.data.done)
		console.log(this.state.checkedA)
    return (
        <MainContenner>
             <Checkbox
				checked={this.state.checkedA}
                onChange={this.handleChange}
                value={'checkedA'}
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