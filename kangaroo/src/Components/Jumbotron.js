import React from 'react';
import './components.css';
import{Container, Row, Column} from './Grid'

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
                <div className="text-center">
                <img src="/images/LogoOne.png" className="img-fluid" alt="Responsive image"></img>
                <hr className="my-4"></hr>
                <button className="btn btn-secondary btn-lg" onClick={props.onClick}>Register</button>
                <a href="/search" role="button" className="btn btn-secondary btn-lg">Search for Lease</a>    
                </div>  
        </div>
    );
};

export default Jumbotron;