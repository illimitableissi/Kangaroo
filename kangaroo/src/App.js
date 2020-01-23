import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Parallax from './Components/Parallax';
import {Container, Row, Column} from './Components/Grid';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <br />
      <Parallax>
        <Container>
          <br />
          <Card img="/images/lease.PNG" />
          <Card img="/images/packing.PNG"/>
          <Card img="/images/box.PNG"/>
        </ Container>
      </ Parallax>
      

    </div>
  );
}

export default App;
