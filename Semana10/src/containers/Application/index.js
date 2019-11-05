import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"

class Aplication extends Component {
 
  render() {
    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Aplication);
