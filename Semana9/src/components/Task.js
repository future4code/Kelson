
import React from 'react';
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { updateState, deleteTask } from '../actions/Actions ';



class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checkedA: false
		}
	}

	handleChange = (event) =>{
        this.setState({nameTask: event.target.value})
        this.props.updateState(this.props.data.id)
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
            <p on onClick={deleteTask(this.props.data.id)}>X</p>
            
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
	  deleteTask: id => dispatch(deleteTask(id))
	};
  };

export default connect(mapStateToProps, mapDispatchToProps)(Task)