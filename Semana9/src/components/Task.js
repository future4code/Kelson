
import React from 'react';
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { updateState, updateStatesAll, deleteTask, deleteAllCompliteTasks, createNewTask } from '../actions/Actions ';



class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checkedA: false
		}
	}

	handleChange = (event) =>{
        this.setState({nameTask: event.target.value})
        updateState(this.props.data.id)
	}

	render() {
    return (
        <div>
             <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
            />
            <p>{this.props.data.name}</p>
            <p>X</p>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Task)