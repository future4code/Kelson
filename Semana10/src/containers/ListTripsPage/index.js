import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import { getTrips, getId } from "../../actions/trips";


class ListTripPage extends Component {

  componentDidMount(){
    this.props.getTrips()
  }
    
     

  callDetails = (id) => {
    this.props.goDetailsTrip()
    this.props.getId(id)
  } 

  render() {
    const trips = this.props.trips.map(trip => (<li onClick={() => this.callDetails(trip.id)}>{trip.name}</li> ))
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goBack}>Voltar</Button>
        <Button onClick={this.props.goDetailsTrip}>DetailsTrip</Button>
        <ul>
           {trips}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goBack: () => dispatch(goBack()),
  goDetailsTrip: () => dispatch(push(routes.detailsTrip)),
  getTrips: () => dispatch(getTrips()),
  getId: id => dispatch(getId(id)),
  goLogin: () => dispatch(push(routes.login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTripPage);
