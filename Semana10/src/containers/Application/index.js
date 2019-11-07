import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import {getTrips, applyTrip} from "../../actions/trips"

class Aplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {}
    };
  }

  componentDidMount(){
    this.props.getTrips()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.applyTrip(this.state.form, this.state.form.tripId)
  };
  
  render() {
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.form.name || ""}
            required
            onChange={this.handleInputChange}
            pattern="^[a-zA-Z]{3,}"
          />

          <label htmlFor="age">Age: </label>
          <input
            id="age"
            name="age"
            type="number"
            min="18"
            value={this.state.form.age || ""}
            required
            onChange={this.handleInputChange}
          />

          <label htmlFor="applicationText">Application Text: </label>
          <input
            id="applicationText"
            name="applicationText"
            type="text"
            value={this.state.form.applicationText || ""}
            required
            onChange={this.handleInputChange}
            minlenght="30"
          />

          <label htmlFor="profession">Profession: </label>
          <input
            id="profession"
            name="profession"
            type="text"
            value={this.state.form.profession || ""}
            required
            onChange={this.handleInputChange}
            minlenght="10"
          />

          <label htmlFor="country">Country: </label>
          <select   
            id="country"
            name="country"
            value={this.state.form.country || ""}
            onChange={this.handleInputChange}
            required
          >
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany ">Germany </option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="UnitedKingdom">United Kingdom</option>
            <option value="UnitedStates ">United States </option>
            <option value="Russia">Russia</option>
          </select>

          <label htmlFor="tripId">Trip: </label>
          <select   
            id="tripId"
            name="tripId"
            value={this.state.form.tripId || ""}
            onChange={this.handleInputChange}
            required
          >
            {this.props.trips.map( trip => (<option value={trip.id}>{trip.name} - {trip.planet}</option>))}
          </select>

          
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  getTrips: () => dispatch(getTrips()),
  applyTrip: (form, id) => dispatch(applyTrip(form, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Aplication);
