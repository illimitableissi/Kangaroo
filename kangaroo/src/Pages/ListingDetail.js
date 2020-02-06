import React from 'react';
import Nav from '../Components/Nav'
import Parallax from "../Components/Parallax";
import API from '../utils/API'

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
                <Parallax>
                <Nav />
                <h1>{this.state.listing.location}</h1>
                <a href="/search" role="button" className="btn btn-danger">Go Back</a>
                </Parallax>
            </div>  
        );
      }
    }
export default ListingDetail;