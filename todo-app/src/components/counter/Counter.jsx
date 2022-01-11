import React, { Component } from "react";
import "./Counter.css";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>{this.props.by}</button>
        <span className="count" style={{ fontSize: "50px" }}>
          {this.state.counter}
        </span>
      </div>
    );
  }

  increment() {
    this.setState({ counter: this.state.counter + this.props.by });
  }
}

CounterButton.defaultProps = {
  by: 1,
};

// Counter.propTypes = {
//   by: propTypes.number,
// };

export default CounterButton;
