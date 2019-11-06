import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import {createTrip} from "../../actions/trips"

class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {}
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTrip(this.state.form)
  };


  render() {
    const today = new Date()
    const day = today.getDate() < 10? `0${today.getDate()}`: today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    const MinDate = `${year}-${month}-${day}`
  

    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goBack}>Voltar</Button>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.form.name || ""}
            required
            onChange={this.handleInputChange}
            minlenght="5"
          />

          <label htmlFor="planet">Planet: </label>
          <select   
            id="planet"
            name="planet"
            value={this.state.form.name || ""}
            required
            onChange={this.handleInputChange}
          >
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth ">Earth </option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus ">Uranus </option>
            <option value="Neptune">Neptune</option>
          </select>

          <label htmlFor="date">Date: </label>
          <input
            id="date"
            name="date"
            type="date"
            min={MinDate}
            value={this.state.form.date || ''}
            required
            onChange={this.handleInputChange}
          />

          <label htmlFor="description">Description: </label>
          <input
            id="description"
            name="description"
            type="text"
            value={this.state.form.description || ""}
            required
            onChange={this.handleInputChange}
            minlenght="30"
          />

          <label htmlFor="durationInDays">Duration In Days: </label>
          <input
            id="durationInDays"
            name="durationInDays"
            type="number"
            value={this.state.form.durationInDays || ""}
            required
            onChange={this.handleInputChange}
            min="50"
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goBack: () => dispatch(goBack()),
  goCreateTrip: () => dispatch(push(routes.createTrip)),
  createTrip: form => dispatch(createTrip(form)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
