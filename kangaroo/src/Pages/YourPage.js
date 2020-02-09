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
            console.log(this.state)
            return this.state
        });
      });
    }
    
    render () {
        return (
            <div>
                <Nav />
                <h1>Welcome {this.state.user.name}!</h1>
                <a className="btn btn-danger" href="/">Logout</a>
                <a className="btn btn-success" href={"/user/" + this.state.user._id + "/form"}>Create Listing</a>
                {/* {this.state.user.userListing.map(listing => */}
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        {/* {listing.location} */}
                        </Card.Text>
                        <Button variant="danger">Delete Listing</Button>
                    </Card.Body>
                </Card>
                {/* )} */}
            </div>
        )
    }

};
export default YourPage;