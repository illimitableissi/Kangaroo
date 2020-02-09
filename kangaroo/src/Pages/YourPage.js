import React from 'react';
import API from '../utils/API'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Nav from '../Components/Nav'

function pullListingsByUsername (userName) {
    return API.getUserName(userName)

}

class YourPage extends React.Component {
    state = {
        user: [],
        listings: {},
    };
    
    componentDidMount() {
        API.getUser(this.props.match.params.id)
          .then(user => {
            this.setState({user: user.data})
            pullListingsByUsername(this.state.user.userName)
            .then(listing => {
              this.setState({listings: listing.data});
            console.log(this.state.listings[0].userName)
            return this.state
        });
      });
    }

    deleteListing = id => {
        API.deleteListing(id)
 
      };

    render () {
        return (
            <div>
                <Nav />
                <h1>Welcome {this.state.user.name}!</h1>
                <a className="btn btn-danger" href="/">Logout</a>
                <a className="btn btn-success" href={"/user/" + this.state.user._id + "/form"}>Create Listing</a>
                {this.state.listings.map(listing => 
                <Card>
                    <Card.Header>Your Listings:</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>Location: {listing.location}</Card.Text>
                        <Card.Text>Price: {listing.price}</Card.Text>
                        <Card.Text>Rooms: {listing.rooms}</Card.Text>
                        <Card.Text>Sqft: {listing.sqft}</Card.Text>
                        <Card.Text>Negotiable: {listing.negotiable}</Card.Text>
                        <Card.Text>Pet Friendly: {listing.petFriendly}</Card.Text>
                        <Card.Text>Date Available: {listing.dateAvailable}</Card.Text>
                        <Card.Text>Minimum Lease: {listing.minLeaseByMonth}</Card.Text>
                        <Card.Text>Address: {listing.adress}</Card.Text>
                        <Button variant="danger"
                        onClick={() => this.deleteListing(listing._id)}
                        >Delete Listing</Button>
                    </Card.Body>
                </Card>
                 )}
            </div>
        )
    }

};
export default YourPage;