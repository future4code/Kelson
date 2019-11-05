import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

class CreateTrip extends Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goBack}>Voltar</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goBack: () => dispatch(goBack()),
  goCreateTrip: () => dispatch(push(routes.createTrip))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
