import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {decideCandidate} from "../actions/trips"

class CardCandidate extends Component {

  render() {
      const approve = {
        "approve": true
        }

    const deleteCandidate = {
        "approve": false
        }
    return (
      <div>
        <p>{this.props.candidate.name}</p>
        <p>Planet: {this.props.candidate.age}</p>
        <p>Date: {this.props.candidate.applicationText}</p>
        <p>Description: {this.props.candidate.profession}</p>
        <p>Duration: {this.props.candidate.country} Days</p>
        <Button onClick={this.props.decide(approve, this.props.id, this.props.candidate.id)}>Approve</Button>
        <Button onClick={this.props.decide(deleteCandidate, this.props.id, this.props.candidate.id)}>Delete</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
decide: (form, id, candidateId) => dispatch(decideCandidate(form, id, candidateId))
})


export default connect(mapStateToProps, mapDispatchToProps)(CardCandidate);