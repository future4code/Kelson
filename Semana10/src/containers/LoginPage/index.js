import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

class LoginPage extends Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goAdm}>Login</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goAdm: () => dispatch(push(routes.adm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
