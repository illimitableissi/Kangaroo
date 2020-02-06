import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav';
import API from '../utils/API';
import Parallax from '../Components/Parallax';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onClick}>Close</Button>
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
        show: false
};

componentDidMount() {
     this.loadListings();
}

loadListings = () => {
    return API.getListings()
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

openModal = () => {
    this.setState({show:true})
}

closeModal = () => {
    this.setState({show:false})
}
  
render () {
    return (
        <div>
            <MyVerticallyCenteredModal 
            show={this.state.show}
            onClick={this.closeModal}/>
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
                                onClick={this.openModal}
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