import React from 'react';
import Nav from '../Components/Nav'
import API from '../utils/API';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

class ListingDetail extends React.Component {
    state = {
        listing: {}
    };
    
    componentDidMount() {
        API.getId(this.props.match.params.id)
          .then(res => this.setState({ listing: res.data }))
          .catch(err => console.log(err));
      }
    
      render () {
          return (
            <div>
                <Nav />
                <a href="/search" role="button" className="btn btn-danger">Go Back</a>
                <Carousel>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.listing.image}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/apartment-complex.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/interior.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/pool.jpg"
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/insideApartment.jpg"
                        alt="Fifth slide"
                        />
                     </Carousel.Item>
                </Carousel>
                <Card className="bg-dark text-center">
                    <Card.Img src="/images/gray.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Property Information</Card.Title>
                                <Card.Text>
                                    <p>Location: {this.state.listing.location}</p>
                                    <p>Price: {this.state.listing.price}</p>
                                    <p>Rooms: {this.state.listing.rooms}</p>
                                    <p>Sqft: {this.state.listing.sqft}</p>
                                    <p>Available Move in Date: {this.state.listing.dateAvailable}</p>
                                    <p>Minimum Lease by Month: {this.state.listing.minLeaseByMonth}</p>
                                    <p>Price Negotiable: {this.state.listing.negotiable}</p>
                                    <p>Pet Friendly: {this.state.listing.petFriendly}</p>
                                    <p>Address: {this.state.listing.address}</p>
                                    <p>Property Details: {this.state.listing.propertyDetails}</p>
                                </Card.Text>
                        </Card.ImgOverlay>
                </Card>                     
            </div>  
        );
      }
    }
export default ListingDetail;