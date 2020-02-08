import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search";
import LoggedIn from "./Pages/LoggedIn";
import Nav from './Components/Nav';
import ListingDetail from './Pages/ListingDetail';
import YourPage from './Pages/YourPage';
import UserListing from './Pages/UserListing';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

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


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route exact path="/login" component={LoggedIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/listing/:id" component={ListingDetail} />
          <Route exact path="/user" component={UserListing} />
          <Route exact path="/user/:id" component={YourPage} />
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

export default App;

