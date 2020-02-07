import React from 'react';
import Nav from '../Components/Nav'
import Parallax from "../Components/Parallax";
import API from '../utils/API';
import Carousel from 'react-bootstrap/Carousel'

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
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/apartment-complex.jpg"
                        alt="First slide"
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
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/insideApartment.jpg"
                        alt="Third slide"
                        />
                     </Carousel.Item>
                </Carousel>                 
                <h1>{this.state.listing.location}</h1>
                <a href="/search" role="button" className="btn btn-danger">Go Back</a>
            </div>  
        );
      }
    }
export default ListingDetail;