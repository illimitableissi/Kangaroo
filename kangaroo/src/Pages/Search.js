import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav'
import API from '../utils/API'

class Search extends Component{
    state = {
        listings: [],
        location= "",
        price= "",
        rooms= "",
        negotiable ="",
        pets="",
};

componentDidMount() {
    this.loadListings();
  }

    // Loads all books  and sets them to this.state.books
loadListings = () => {
 API.getListings()
    .then(res =>
    this.setState({ listings: res.data, location: "", price: "", rooms: "", negotiable: "", pets: "" })
    )
    .catch(err => console.log(err));
};

render () {
    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    <Column>
                    <SearchForm />
                    </Column>
                    <Column>
                    <SearchResults />
                    <SearchResults />
                    <SearchResults />
                    <SearchResults />
                    </Column>
                </Row>
            </Container>       
        </div>
    );
};

}

export default Search;