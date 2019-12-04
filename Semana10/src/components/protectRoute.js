import React, { Component } from "react";
import {routes} from "../containers/Router/index";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../containers/LoginPage";
import CreateTrip from "../containers/CreateTrip";
import ListTripPage from "../containers/ListTripsPage";
import TripDetailsPage from "../containers/TripDetailsPage";
import Adm from "../containers/Adm";
import { connect } from "react-redux";
import { push, } from "connected-react-router";


class ProtectRouter extends Component {

  render() {
    const token = window.localStorage.getItem("token")

    const Router = token === null?
                    this.props.goLogin():
                    <Route path={this.props.path} component={this.props.component} />
    return (
      <div>
          {Router}
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goLogin: () => dispatch(push(routes.login)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProtectRouter);
