import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search";
import LoggedIn from "./Pages/LoggedIn";
import Nav from './Components/Nav';
import ListingDetail from './Pages/ListingDetail';
import YourPage from './Pages/YourPage';
import UserListing from './Pages/UserListing'


function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Route exact path="/login" component={LoggedIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/listing/:id" component={ListingDetail} />
          <Route exact path="/user" component={UserListing} />
          <Route exact path="/user/:id" component={YourPage} />
      </div>
    </Router>
  );
}

export default App;

