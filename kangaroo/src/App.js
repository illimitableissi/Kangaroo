import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Parallax from './Components/Parallax';
import {Container, Row, Column} from './Components/Grid';
import Card from './Components/Card';
import Images from './Components/Images'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Parallax>
      <Jumbotron />
        <Container>
          <br />
          <Card img="/images/lease.PNG" aos="fade-right"/>
          <Card img="/images/packing.PNG" aos="fade-left"/>
          <Card img="/images/box.PNG" aos="fade-right"/>
        </ Container>
      </ Parallax>
    </div>
  );
}

export default App;
