import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

class HomePage extends Component {

  render() {
    console.log(this.props.id)
    return (
      <div>
        <Button onClick={this.props.goApplication}>Application</Button>
        <Button onClick={this.props.goListLogin}>Login</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.trips.id
})

const mapDispatchToProps = dispatch => ({
  goApplication: () => dispatch(push(routes.application)),
  goListLogin: () => dispatch(push(routes.login)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
