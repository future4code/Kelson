import React from "react";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {dispatchCreate} from "../../actions/createNewPlan"

export class Create extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
                    plan: "",
                    day: ""}
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    createNewPlan = () => {
        const { day, plan } = this.state
        const data = {
                text: plan,
                day }
        this.props.dispatchCreate(data)
    }

    render() {
        return(
        <Card >
                <CardHeader
                    title="Create a new Plan"
                />
                <CardContent>
                    <TextField
                        id="plan"
                        label="Plan"
                        name="plan"
                        value={this.state.plan}
                        onChange={this.handleChange}
                        margin="normal"
                    />

                    <TextField
                        id="day"
                        select
                        label="Select a day"
                        name="day" 
                        value={this.state.day}
                        onChange={this.handleChange}
                        
                        helperText="Please select a day"
                        margin="normal"
                    >
                        <option value="Domingo">Domingo</option>
                        <option value="Seguando">Seguando</option>
                        <option value="Terça">Terça</option>
                        <option value="Quarta">Quarta</option>
                        <option value="Quinta">Quinta</option>
                        <option value="Sexta">Sexta</option>
                        <option value="Sabado">Sabado</option>
                    </TextField>
                    
                </CardContent>
                <CardActions>
                    <Button id= "Button" onClick={this.createNewPlan}>Create</Button>
                </CardActions>
            </Card>
        
        
    )}
}

const mapDispatchToProps = dispatch =>({
    dispatchCreate: (data) => dispatch( dispatchCreate(data) )
})



export default connect(null, mapDispatchToProps )(Create);
