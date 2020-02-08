import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search";
import LoggedIn from "./Pages/LoggedIn";
import Nav from './Components/Nav';
import ListingDetail from './Pages/ListingDetail';
import NoPage from './Pages/NoPage';
import User from './Pages/User'


function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route exact path="/user" component={LoggedIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/listing/:id" component={ListingDetail} />
          <Route exact path="/user/:id" component={User} />
          {/* <Route component={NoPage} /> */}
      </div>
    </Router>
  );
}

export default App;

