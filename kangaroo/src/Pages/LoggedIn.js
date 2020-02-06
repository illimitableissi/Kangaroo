import React from 'react';
import Nav from '../Components/Nav';
import API from '../utils/API'

class LoggedIn extends React.Component {
state = {
    listing: {}
};

  render () {
      return (
        <div>
            <Nav />
            
        </div>
    );
  }
}


export default LoggedIn;