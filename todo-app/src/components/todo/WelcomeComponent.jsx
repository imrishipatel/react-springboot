import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this);
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Hey Rishi! You can manage your Todos <Link to="/todos">here.</Link>
        </div>

        <div className="container">
          Click here to get a customized welcome message.{" "}
          <button
            onClick={this.retreiveWelcomeMessage}
            className="btn btn-success"
          >
            get Welcome Message
          </button>
        </div>
      </>
    );
  }

  retreiveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService().then((res) =>
      console.log(res)
    );
  }
}

export default WelcomeComponent;
