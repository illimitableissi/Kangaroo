import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav';
import API from '../utils/API';
import {FormBtn} from '../Components/FormBtn';

class Search extends React.Component{
    state = {
        listings: [],
        location: "",
        price: "",
        rooms: "",
        moveIn: "",
        negotiable:"",
        pets:"",
        address: "",
        lease: "",
        sqft: "",
};

componentDidMount() {
    this.loadListings();
  }
;

loadListings = async () => {
    const response = await fetch('/api/listings');
    const body = await response.json();
    this.setState({ listings: body});
    if (response.status !== 200) throw Error(body.message);
    
    return response;
   };
  
filter = () => {
    this.loadListings()
};

render () {
    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    <Column>              
                    <SearchForm>
                    {this.state.listings.map(listing => {
                        return (
                        <option>{listing.location}</option>
                            );
                    })};
                    </SearchForm>
                    <FormBtn
                        onClick={this.filter}
                    >
                    </FormBtn>
                    </Column>
                    <Column>
                    {this.state.listings.map(listing => {
                        return (
                    <SearchResults 
                    location= {listing.location}
                    price= {listing.price}
                    rooms= {listing.rooms}
                    negotiable= {listing.negotiable}
                    pets = {listing.petFriendly}
                    sqft = {listing.sqft}
                    lease = {listing.minLeaseByMonth}
                    address = {listing.address}
                    moveIn = {listing.dateAvailable}
                        />
                    );
                })}
                    </Column>
                </Row>
            </Container>       
        </div>
    );
};


}

export default Search;