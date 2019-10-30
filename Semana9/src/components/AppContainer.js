
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { fetchList ,updateStatesAll, deleteAllCompliteTasks, createNewTask, deleteAllCompliteTasksIdl, createNewTaskIdl } from '../actions/Actions ';
import Task from './Task'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const MainContenner = styled.div`
	display:grid;
	justify-items:center;
`
const Cardstyled = styled(Card)`
	width: 70vw;
	justify-self: center;
`

const ContenierCreate = styled.div`
	display:flex;
	justify-content:center;
`

const TextFieldstyled = styled(TextField)`
	width: 80%;
`
class AppContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nameTask: "",
			tocomplite: 'Completar todos',
			complite: false
		}
	}

	componentDidMount (){
		  this.props.fetchList();
		}

	handleChange = (event) =>{
		this.setState({nameTask: event.target.value})
	}

	createTask = () => {
		const task = {
						'text': this.state.nameTask,
		}
		this.props.createNewTaskIdl(task);
	}

	updateTasks = () => {
		console.log("te")
		if (this.state.tocomplite === 'Completar todos'){
			this.setState({tocomplite: 'Desmarcar Todas'})
			this.setState({complite: true})
		}
		else{
			this.setState({tocomplite: 'Completar todos'})
			this.setState({complite: false})
		}
		this.props.updateStatesAll(this.state.complite)
	}

	render() {
	const list = this.props.tasks.map(task =>{return <Task data={task}/>})
		return (
			<MainContenner>
				<h1>4Task</h1>
				<Cardstyled>
					<ContenierCreate>
						<TextFieldstyled
							id="standard-name"
							label="New Task"
							value={this.state.name}
							onChange={this.handleChange}
							margin="normal"
						/>
						<Button  onClick={this.createTask}>
							Create
						</Button>
					</ContenierCreate>
					<hr/>
					<h3>Tasks</h3>
					<CardContent>	
						{list}
					</CardContent>
					<hr/>
					<CardActions>
						<Button onClick={this.props.deleteAllCompliteTasksIdl}>Delete Complite Tasks</Button>
					</CardActions>
				</Cardstyled>
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
	  fetchList: () => dispatch(fetchList()),
	  updateStatesAll: complite => dispatch(updateStatesAll(complite)),
	  deleteAllCompliteTasks: () => dispatch(deleteAllCompliteTasks()),
	  createNewTask: task => dispatch(createNewTask(task)),
	  deleteAllCompliteTasksIdl: () => dispatch(deleteAllCompliteTasksIdl()),
	  createNewTaskIdl: task => dispatch(createNewTaskIdl(task))

	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)