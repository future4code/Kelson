
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { updateStatesAll, deleteAllCompliteTasks, createNewTask } from '../actions/Actions ';
import Task from './Task'
import Button from '@material-ui/core/Button';

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

	createTask = () => {
		const task = {
						name: this.state.nameTask,
						state: false,
						id:  Number(Date.now())
		}
		console.log(task)
		this.props.createNewTask(task);
	}

	render() {
	const list = () => {this.props.tasks.map(task =>{return <Task data={task}/>})}
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
					<Button variant="contained" color="white"  onClick={this.createTask}>
        				Create
      				</Button>

					<hr/>
					<h3>Tasks</h3>{console.log(this.props.tasks)}
					<CardContent>	
						{list}
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
	  updateStatesAll: complite => dispatch(updateStatesAll(complite)),
	  deleteAllCompliteTasks: () => dispatch(deleteAllCompliteTasks()),
	  createNewTask: task => dispatch(createNewTask(task))

	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)