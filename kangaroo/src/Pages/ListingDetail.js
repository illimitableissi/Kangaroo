import React from 'react';
import Nav from '../Components/Nav'
import Parallax from "../Components/Parallax"

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
                
            </div>
        );
      }
    }
export default ListingDetail;