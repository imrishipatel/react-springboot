import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">
            All Rights Reserved 2021 ©{" "}
            <a href="https://patelrishi.com" target="_blank">
              patelrishi.com
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
