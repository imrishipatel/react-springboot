import React, { PureComponent } from "react";
import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";

class TodoApp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TodoAapp">
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" exact element={<LoginComponent />}></Route>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/welcome" element={<WelcomeComponent />}></Route>
            </>
          </Routes>
        </BrowserRouter>

        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends PureComponent {
  render() {
    return <div>Welsome Rishi!!!</div>;
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

      //   this.props.history.push("/welcome");
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      console.log("Failed");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }

    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        {/* <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
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

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }

//   return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successful</div>;
//   }

//   return null;
// }

export default TodoApp;
