import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
