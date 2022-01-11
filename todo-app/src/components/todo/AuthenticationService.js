import React, { PureComponent } from "react";

class AuthenticationService extends PureComponent {
  registerSuccessfulLogin(username, password) {
    console.log("Register Successful Login");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) {
      return false;
    }

    return true;
  }
}

export default new AuthenticationService();
