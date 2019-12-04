import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

class Adm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goListTrip}>ListTrip</Button>
        <Button onClick={this.props.goCreateTrip}>CreateTrip</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goListTrip: () => dispatch(push(routes.listTrip)),
  goCreateTrip: () => dispatch(push(routes.createTrip)),
  goLogin: () => dispatch(push(routes.login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Adm);
