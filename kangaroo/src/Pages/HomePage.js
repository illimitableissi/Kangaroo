import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import Parallax from '../Components/Parallax';
import {Container, Row, Column} from '../Components/Grid';
import Card from '../Components/Card';
import Images from '../Components/Images'
import Nav from '../Components/Nav'
import Modal from 'react-bootstrap/Modal'
import API from '../utils/API'

const MyVerticallyCenteredModal = ({ children, onClick, ...rest}) => {
  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
  <Modal.Dialog>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        Registration:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

class HomePage extends React.Component {
  state ={
    user=[],
    show: false,
    userName: "",
    password: "",
    name: "",

  }
openModal = () => {
    this.setState({show:true})
}

closeModal = () => {
    this.setState({show:false})
}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value)
  };

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
                  <MyVerticallyCenteredModal 
            show={this.state.show}
            onClick={this.closeModal}
            >
            <Form>
                <Form.Group controlId="name">
                  <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                    type="text" 
                    name="name"
                    placeholder="John J."  
                    onChange={this.handleInputChange} 
                    value={this.state.name}/>
                </Form.Group>
                <Form.Group controlId="userName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="userName"
                    placeholder="johnj3" 
                    onChange={this.handleInputChange} 
                    value={this.state.userName}/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="password"
                    onChange={this.handleInputChange} 
                    value={this.state.password} />
                </Form.Group>
                    <Button variant="primary" type="submit"
                    disabled={!(this.state.name && this.state.userName && this.state.password)}
                    onClick={this.createUser}>
                        Submit
                     </Button>
            </Form>
            </MyVerticallyCenteredModal>
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