import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Parallax from './Components/Parallax';
import {Container, Row, Column} from './Components/Grid';
import Card from './Components/Card';
import Images from './Components/Images';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Parallax>
//       <Jumbotron />
//         <Container>
//           <br />
//           <Card img="/images/lease.PNG" aos="fade-right"/>
//           <Card img="/images/packing.PNG" aos="fade-left"/>
//           <Card img="/images/box.PNG" aos="fade-right"/>
//         </ Container>
//       </ Parallax>
//       <Landing />
//       <Register />
//       <Login />
//     </div>
//   );
// }

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
