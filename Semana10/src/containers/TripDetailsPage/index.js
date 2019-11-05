import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import { getTripDetails } from "../../actions/trips";

class TripDetailsPage extends Component {
  
  componentDidMount(){
    
    this.props.getTripDetails(this.props.id)
  }

  render() {
    console.log(goBack())
    return (
      <div>
        <Button onClick={this.props.goBack}>Voltar</Button>
        <Button onClick={this.props.goHome}>Home</Button>
        <p>{this.props.trip.name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trip: state.trips.tripDetails,
  id: state.trips.id
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goBack: () => dispatch(goBack()),
  getTripDetails: id => dispatch(getTripDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
