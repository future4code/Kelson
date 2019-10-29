
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { updateState, updateStatesAll, deleteTask, deleteAllCompliteTasks, createNewTask } from '../actions/Actions ';
import Task from './Task'

class AppContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nameTask: ""
		}
	}

	handleChange = (event) =>{
		this.setState({nameTask: event.target.value})
	}

	render() {
		return (
			<div>
				<h1>4Task</h1>
				<Card>
					<TextField
						id="standard-name"
						label="New Task"
						value={this.state.name}
						onChange={this.handleChange}
						margin="normal"
					/>
					<hr/>
					<h3>Tasks</h3>
					<CardContent>
						{this.props.tasks.map(task => <Task data={task}/>)}
					</CardContent>
					<CardActions>
						
					</CardActions>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		tasks: state.tasks
	}
}

const mapDispatchToProps = dispatch => {
	return {
	  updadeState: id => dispatch(updateState(id)),
	  updateStatesAll: complite => dispatch(updateStatesAll(complite)),
	  deleteTask: id => dispatch(deleteTask(id)),
	  deleteAllCompliteTasks: () => dispatch(deleteAllCompliteTasks()),
	  createNewTask: task => dispatch(createNewTask(task))

	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)