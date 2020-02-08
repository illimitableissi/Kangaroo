import React from 'react';
import Nav from '../Components/Nav';
import API from '../utils/API'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class LoggedIn extends React.Component {
state = {
    show:true,
    listing: {},
    userName: "",
    password: "",
    userListing: [],
};

componentWillMount () {

}



  render () {
      return (
        <div>
              <Modal>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Form>
                        <Form.Group controlId="username">
                          <Form.Label>UserName</Form.Label>
                            <Form.Control
                            type="text" 
                            name="userName"  
                            onChange={this.handleInputChange} 
                            value={this.state.fullName}/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="passeord"
                            onChange={this.handleInputChange} 
                            value={this.state.password}/>
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary"
                      >Submit</Button>
                    </Modal.Footer>
                </Modal.Dialog>
              </Modal>  
            <Nav />          
        </div>
    );
  }
}


export default LoggedIn;