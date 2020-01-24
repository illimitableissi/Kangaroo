import React from 'react';
import{Container, Row, Column} from './Grid'
import './components.css'

const Images = (props) => {
    return (
        <div className="text-center">
            <Row>
                <img src={props.image} className="img-fluid" alt="Responsive image"></img>
                <p>{props.message}</p>
            </Row>
        </div>
    );
};

export default Images;