import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults'


const Search = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Column>
                    <SearchForm />
                    <SearchResults />
                    </Column>
                </Row>
            </Container>       
        </div>
    );
};

export default Search;