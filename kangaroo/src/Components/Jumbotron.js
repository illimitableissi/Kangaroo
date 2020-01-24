import React from 'react';
import './components.css';
import{Container, Row, Column} from './Grid'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
                <div className="text-center">
                <img src="/images/LogoOne.png" className="img-fluid" alt="Responsive image"></img>
                <hr className="my-4"></hr>
                <button type="button" class="btn btn-secondary btn-lg">Large button</button>    
                </div>  
        </div>
    );
};

export default Jumbotron;