import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search";
import LoggedIn from "./Pages/LoggedIn";
import Nav from './Components/Nav'


function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={HomePage} />
          <Nav />
          <Route exact path="/user" component={LoggedIn} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;

