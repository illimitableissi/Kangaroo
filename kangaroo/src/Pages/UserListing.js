import React from 'react';
import API from '../utils/API'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import '../Components/details.css'

class UserListing extends React.Component{

state={
    createdlisting: [],
    savedListing: [],
    location: "",
    price: "",
    rooms: "",
    sqft: "",
    negotiable: "",
    petFriendly: "",
    dateAvailable: "",
    minLeaseByMonth: 0,
    address: "",
    messages: [],
    propertyDetails: "",
    image: "",
    show: false,
    fullName: "",
    email: "",
    phoneNumber: "",
    id:"",
    userName: ""
}

componentDidMount = () => {
    API.getUser(this.props.match.params.id)
          .then(res => this.setState({ savedListing: res.data }))
          .catch(err => console.log(err));
}


postListing = (e) => {
    e.preventDefault();
    API.createListing({
        userName: this.state.userName,
        location: this.state.location,
        price: this.state.price,
        rooms: this.state.rooms,
        sqft: this.state.sqft,
        negotiable: this.state.negotiable,
        petFriendly: this.state.petFriendly,
        dateAvailable: this.state.dateAvailable,
        minLeaseByMonth: this.state.minLeaseByMonth,
        address: this.state.address,
        image: this.state.image,
        propertyDetails: this.state.propertyDetails,
    })
    .then(res => {
              this.setState({ createdlisting: res.data });
            })
    .catch(err => console.log(err));
    console.log("Listing added!!")  
}

addListing = (e) => {
    e.preventDefault();
    API.createUserListing(
        this.state.savedListing._id, {
        userName: this.state.userName,
        location: this.state.location,
        price: this.state.price,
        rooms: this.state.rooms,
        sqft: this.state.sqft,
        negotiable: this.state.negotiable,
        petFriendly: this.state.petFriendly,
        dateAvailable: this.state.dateAvailable,
        minLeaseByMonth: this.state.minLeaseByMonth,
        address: this.state.address,
        image: this.state.image,
        propertyDetails: this.state.propertyDetails,
    })
    .then(res => {
              this.setState({ savedListing: res.data });
            })
    .catch(err => console.log(err));
    console.log("Listing added!!")  
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
            <a href={"/user/" + this.state.savedListing._id} role="button" className="btn btn-danger">Go Back</a>
            <Container className="formContainer">
                 <Form>
                 <Form.Group controlId="userName">
                  <Form.Label>Username for Listing:</Form.Label>
                    <Form.Control
                    // type="text" 
                    name="userName"
                    placeholder={this.state.savedListing.userName} 
                    onChange={this.handleInputChange} 
                    value={this.state.userName}
                    />
                </Form.Group>
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
                    name="price"
                    placeholder="750" 
                    onChange={this.handleInputChange} 
                    value={this.state.price}/>
                </Form.Group>
                <Form.Group controlId="rooms">
                    <Form.Label>Amount of rooms available:</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="rooms"
                    placeholder="1" 
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
                    value={this.state.negotiable} />
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
                    type="number" 
                    name="minLeaseByMonth"
                    placeholder="1"
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
                <Form.Group controlId="image">
                    <Form.Label>Image Url:</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="image"
                    placeholder="https://...imageurl"
                    onChange={this.handleInputChange} 
                    value={this.state.image} />
                </Form.Group>
                <Form.Group controlId="propertyDetails">
                    <Form.Label>Property Details:</Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows="5" 
                    name="propertyDetails" 
                    onChange={this.handleInputChange} 
                    value={this.state.propertyDetails} />
                </Form.Group>
                    <Button variant="primary" type="submit"
                    disabled={!(this.state.userName)}
                    onClick={this.postListing}>
                        Make Listing Public
                     </Button>
                     <Button variant="primary" type="submit"
                    disabled={!(this.state.userName)}
                    onClick={this.addListing}>
                        Save Listing to Profile
                     </Button>
            </Form>
        </Container>     
        </div>
    );
};

}

export default UserListing;
