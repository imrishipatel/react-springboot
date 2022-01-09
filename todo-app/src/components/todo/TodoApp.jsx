import React, { PureComponent } from "react";

class TodoApp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TodoAapp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends PureComponent {
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
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  //   handleUserNameChange(event) {
  //     console.log(event.target.value);
  //     this.setState({ [event.target.name]: event.target.value });
  //   }

  //   handlePasswordChange(event) {
  //     console.log(event.target.value);
  //     this.setState({ password: event.target.value });
  //   }

  loginClicked() {
    if (
      this.state.username === "rishipatel" &&
      this.state.password === "admin"
    ) {
      console.log("Successful");
    } else {
      console.log("Failed");
    }

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>Invalid Credentials</div>
        <div>Login Successful</div>
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default TodoApp;
