import React from 'react';
import API from '../utils/API'
import Form from 'react-bootstrap/Form'

class User extends React.Component{

state={
    listings: [],
    filters: [],
    location: "",
    price: "",
    rooms: "",
    sqft: "",
    negotiable: true,
    petFriendly: true,
    dateAvailable: "",
    minLeaseByMonth: 0,
    address: "",
    messages: [],
    propertyDetails: "",
    image: "",
    show: false,
    selectedCard: {},
    messages: [],
    fullName: "",
    email: "",
    phoneNumber: "",
    id:"",
}

componentDidMount = () => {}

completeListing = () => {}

logOut = () => {}

postListing = (e) => {
    e.preventDefault();
    API.createListing({

    })
}
handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value)
  };


render () {
    return (
        <div>
                 <Form>
                <Form.Group controlId="name">
                  <Form.Label>Listing Location:</Form.Label>
                    <Form.Control
                    type="text" 
                    name="location"
                    placeholder="Atlanta"  
                    onChange={this.handleInputChange} 
                    value={this.state.location}/>
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="text"
                    placeholder="750" 
                    onChange={this.handleInputChange} 
                    value={this.state.price}/>
                </Form.Group>
                <Form.Group controlId="rooms">
                    <Form.Label>Amount of rooms available:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="rooms"
                    placeholder="750" 
                    onChange={this.handleInputChange} 
                    value={this.state.rooms}/>
                </Form.Group>
                <Form.Group controlId="sqft">
                    <Form.Label>Square Feet:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="sqft"
                    placeholder="650"
                    onChange={this.handleInputChange} 
                    value={this.state.sqft} />
                </Form.Group>
                <Form.Group controlId="negotiable">
                    <Form.Label>Is this price negotiable?</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="negotiable"
                    placeholder="Yes"
                    onChange={this.handleInputChange} 
                    value={this.state.sqft} />
                </Form.Group>
                <Form.Group controlId="petFriendly">
                    <Form.Label>Can the tenant have pets?</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="petFriendly"
                    placeholder="Yes"
                    onChange={this.handleInputChange} 
                    value={this.state.petFriendly} />
                </Form.Group>
                <Form.Group controlId="dateAvailable">
                    <Form.Label>Available Move in Date:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="dateAvailable"
                    placeholder="February 11th, 2020"
                    onChange={this.handleInputChange} 
                    value={this.state.dateAvailable} />
                </Form.Group>
                <Form.Group controlId="minLeaseByMonth">
                    <Form.Label>Minimum amount of months for lease:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="minLeaseByMonth"
                    placeholder="February 11th, 2020"
                    onChange={this.handleInputChange} 
                    value={this.state.minLeaseByMonth} />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="address"
                    placeholder="12345 Anywhere Ln Atlanta, GA 55555"
                    onChange={this.handleInputChange} 
                    value={this.state.address} />
                </Form.Group>
                    <Button variant="primary" type="submit"
                    disabled={!(this.state.fullName && this.state.email)}
                    onClick={this.completeListing}>
                        Submit
                     </Button>
            </Form>
            
        </div>
    );
};

}

export default User;
