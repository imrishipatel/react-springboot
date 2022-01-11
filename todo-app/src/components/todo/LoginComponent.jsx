import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
// import "src/bootstrap.css";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "rishipatel",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    if (
      this.state.username === "rishipatel" &&
      this.state.password === "admin"
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.navigate(`/welcome/${this.state.username}`); // newly added v6
      // this.setState({ showSuccessMessage: true })
      // this.setState({ hasLoginFailed: false })
    } else {
      console.log("Failed");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login Successful</div>}
          {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
          UserName:{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />{" "}
          Password:{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />{" "}
          <button
            className="btn btn-success"
            onClick={this.loginClicked}
            className="btn btn-success"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
// newly added v6
function WithNavigate(props) {
  let navigate = useNavigate();
  return <LoginComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
