import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import Parallax from '../Components/Parallax';
import {Container, Row, Column} from '../Components/Grid';
import Card from '../Components/Card';
import Images from '../Components/Images'
import Nav from '../Components/Nav'
import Modal from 'react-bootstrap/Modal'
import API from '../utils/API'

class HomePage extends React.Component {
  state ={
    user=[],
    show: false,
    userName: "",
    password: "",
    name: "",

  }

createUser = () => {
  API.createUser({
    name: this.state.name,
    userName: this.state.userName,
    password: this.state.password
  })
  .then(res => { 
    this.setState({ user: res.data });
  })
  .catch(err => console.log(err));
}

render () {
  return (
    <div className="App">
      <Parallax>
      <Jumbotron />
        <Container>
          <br />
          <Card
          title="Title 1" 
          message="message 1"
          img="/images/lease.PNG" 
          aos="fade-right"/>
          <Card
          title="Title 2" 
          message="message 2" 
          img="/images/packing.PNG" 
          aos="fade-left"/>
          <Card
          title="Title 3" 
          message="message 3" 
          img="/images/box.PNG" 
          aos="fade-right"/>
        </ Container>
      </ Parallax>
      

    </div>
  );
}

}

export default HomePage;