import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import AuthenticationService from "./AuthenticationService.js";
import ListTodosComponent from "./ListTodosComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
// import "./../bootstrap.css";

class TodoApp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="TodoAapp">
        <HeaderComponent />

        <hr />
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/welcome/:name" element={<WelcomeComponent />}></Route>
            <Route path="/todos" element={<ListTodosComponent />}></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
            <Route element={<ErrorComponent />}></Route>
          </Routes>
        </Router>
        <hr />
        <FooterComponent />
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

// class HeaderComponent extends Component {
//   render() {
//     const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//     console.log(isUserLoggedIn);

//     return (
//       <header>
//         <Router>
//           <nav>
//             <div className="navbar navbar-expand-md navbar-dark bg-dark ">
//               <a href="https://patelrishi.com" className="navbar-brand">
//                 Rishi Patel
//               </a>
//               <ul className="navbar-nav">
//                 {isUserLoggedIn && (
//                   <li>
//                     <Link className="nav-link" to="/welcome/rishipatel">
//                       Home
//                     </Link>
//                   </li>
//                 )}
//                 {isUserLoggedIn && (
//                   <li>
//                     <Link className="nav-link" to="/todos">
//                       Todos
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//               <ul className="navbar-nav navbar-collapse justify-content-end">
//                 <li>
//                   {!isUserLoggedIn && (
//                     <Link className="nav-link" to="/login">
//                       Login
//                     </Link>
//                   )}
//                 </li>
//                 <li>
//                   {isUserLoggedIn && (
//                     <Link
//                       className="nav-link"
//                       to="/logout"
//                       onClick={AuthenticationService.logout}
//                     >
//                       Logout
//                     </Link>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </Router>
//       </header>
//     );
//   }
// }

// class FooterComponent extends Component {
//   render() {
//     return (
//       <footer className="footer">
//         <span className="text-muted"> All Rights Reserved, patelrishi.com</span>
//       </footer>
//     );
//   }
// }

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <div className="container">Thank you for your Application. </div>
      </div>
    );
  }
}

function WelcomeComponent() {
  let { name } = useParams();
  return (
    <>
      <h1>Welcome!</h1>
      <div className="container">
        Hey {name}! You can manage your Todos <Link to="/todos">here.</Link>
      </div>
    </>
    // <div>
    //
    // </div>
  );
}

// function ErrorComponent() {
//   return <div>An Error Occured!!! Please reload the application. </div>;
// }

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
