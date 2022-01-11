import React, { PureComponent } from "react";

class LogoutComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">Thank you for your Application. </div>
      </div>
    );
  }
}

export default LogoutComponent;
