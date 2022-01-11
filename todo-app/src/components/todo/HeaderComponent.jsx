import React, { PureComponent } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

class HeaderComponent extends PureComponent {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn);

    return (
      <header>
        <Router>
          <nav>
            <div className="navbar navbar-expand-md navbar-dark bg-dark ">
              <a href="https://patelrishi.com" className="navbar-brand">
                Rishi Patel
              </a>
              <ul className="navbar-nav">
                {isUserLoggedIn && (
                  <li>
                    <Link className="nav-link" to="/welcome/rishipatel">
                      Home
                    </Link>
                  </li>
                )}
                {isUserLoggedIn && (
                  <li>
                    <Link className="nav-link" to="/todos">
                      Todos
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav navbar-collapse justify-content-end">
                <li>
                  {!isUserLoggedIn && (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </li>
                <li>
                  {isUserLoggedIn && (
                    <Link
                      className="nav-link"
                      to="/logout"
                      onClick={AuthenticationService.logout}
                    >
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </Router>
      </header>
    );
  }
}

export default HeaderComponent;
