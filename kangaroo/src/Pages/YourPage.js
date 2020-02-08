import React from 'react';
import API from '../utils/API'

class YourPage extends React.Component {
    state = {
        user: {}
    };
    
    componentDidMount() {
        API.getUser(this.props.match.params.id)
          .then(res => this.setState({ user: res.data }))
          .catch(err => console.log(err));
      }
    render () {
        return (
            <div>
                <h1>{this.state.user.name}</h1>
            </div>
        )
    }

};
export default YourPage;