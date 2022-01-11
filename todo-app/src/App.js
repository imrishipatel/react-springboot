// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
// import Counter from "./components/counter/Counter";
// import Counter from "./components/counter/Counter";
// import CounterButton from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <CounterButton by={1} />
        <CounterButton by={5} />
        <CounterButton by={10} /> */}
        <TodoApp />
      </div>
    );
  }
}

export default App;
