import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav';
import API from '../utils/API';
import Parallax from '../Components/Parallax';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from '../Components/Form';
// import Form from 'react-bootstrap/Form'

const MyVerticallyCenteredModal = ({ onClick, selectedCard, ...rest}) => {
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
          Enter Your Contact Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClick}>Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }

class Search extends React.Component{
    state = {
        listings: [],
        filters: [],
        location: "",
        price: "",
        rooms: "",
        moveIn: "",
        negotiable:"",
        pets:"",
        address: "",
        lease: "",
        sqft: "",
        show: false,
        selectedCard: {},
        messages: [],
        fullName: "",
        email: "",
        number: "",

};

componentDidMount() {
     this.loadListings();
}

loadListings = () => {
    API.getListings()
    .then(res => {
        this.setState({ 
            listings: res.data,
            filters: res.data.filter((thing, index, self) =>
                index === self.findIndex((t) => ( t.location === thing.location
                ))
          )
        })
    })
    .catch(err => console.log(err));
    }

  
filter = (location) => {
    API.getListing(location)
    .then(res => { 
        this.setState({ listings: res.data });
    })
    .catch(err => console.log(err));
};

openModal = (listing) => {
    this.setState({show:true, selectedCard:listing})
}

closeModal = () => {
    this.setState({show:false})
}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

 
sendMessage = e => {
    e.preventDefault();
    if (this.state.fullName && this.state.email) {
    API.contactLister ({
        fullName: this.state.fullName,
        email: this.state.email,
        number: this.state.number
    })
    .then(res => this.load())
    .catch(err => console.log(err));
    }
}


render () {
    return (
        <div>
            <MyVerticallyCenteredModal 
            show={this.state.show}
            onClick={this.closeModal}
            selectedCard={this.state.selectedCard}
            sendMessage={this.sendMessage}
            // onChange={this.handleInputChange}
            value={this.state.fullName}
            />
            <Parallax>
            <Nav />
            <Container>
                <Row>
                    <Column>              
                    <SearchForm
                        handleChange={(e) => this.filter(e.target.value)}
                    >
                    {this.state.filters.map(listing => <option>{listing.location}</option>)};
                    </SearchForm>               
                    </Column>
                    <Column>
                    {this.state.listings.map(listing => {
                        return (
                            <SearchResults 
                                location= {listing.location}
                                price= {listing.price}
                                rooms= {listing.rooms}
                                negotiable= {listing.toString()}
                                pets = {listing.petFriendly.toString()}
                                sqft = {listing.sqft}
                                lease = {listing.minLeaseByMonth}
                                address = {listing.address}
                                moveIn = {listing.dateAvailable}
                                onClick={() => 
                                    {
                                        this.openModal(listing)
                                    }}
                            />
                            );
                        })}
                    </Column>
                </Row>
            </Container>   
            </Parallax>    
        </div>
    );
};


}

export default Search;