import React from 'react';
import SearchForm from '../Components/SearchForm';
import {Container, Row, Column} from '../Components/Grid';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav'


const Search = () => {
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

export default Search;