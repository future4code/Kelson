import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import { getTripDetails } from "../../actions/trips";
import CardCadidates from "../../components/cardCadidates"


class TripDetailsPage extends Component {
  componentDidMount(){
    this.props.getTripDetails(this.props.id)
  }

  render() {
    console.log(this.props.trip.id)

    const candidate = this.props.trip.candidates !== undefined?
                      this.props.trip.candidates.map( cadidate => 
                              <CardCadidates id={this.props.trip.id} candidate={cadidate}/>)
                      : null

    const approved =  this.props.trip.approved !== undefined?
                      this.props.trip.approved.map( approved => <p>{approved.name}</p>)
    : null
    return (
      <div>
        <Button onClick={this.props.goBack}>Voltar</Button>
        <Button onClick={this.props.goHome}>Home</Button>
        <p>{this.props.trip.name}</p>
        <p>Planet: {this.props.trip.planet}</p>
        <p>Date: {this.props.trip.date}</p>
        <p>Description: {this.props.trip.description}</p>
        <p>Duration: {this.props.trip.durationInDays} Days</p>
        <div>
          <p>Candidates</p>
          <ul>
            {candidate}
          </ul>
        </div>
        <div>
          <p>Approved</p>
          <ul>
            {approved}
          </ul>
        </div>
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
  getTripDetails: id => dispatch(getTripDetails(id)),
  goLogin: () => dispatch(push(routes.login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);
