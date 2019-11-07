import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
import { login } from "../../actions/trips";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

    
  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Button onClick={this.props.goHome}>Home</Button>
        <Button onClick={this.props.goAdm}>Login</Button>
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button onClick={()=> this.props.login(email, password)}>Login</Button>
      </LoginWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(push(routes.home)),
  goAdm: () => dispatch(push(routes.adm)),
  login: (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
