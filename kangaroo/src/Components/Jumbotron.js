import React from 'react';
import './components.css';
import { Container, Row, Column } from './Grid'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="text-center">
                <Row>
                    <img src="/images/LogoOne.png" className="img-fluid" alt="Responsive image"></img>
                </Row>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
            </div>
        </div>
    );
};

export default Jumbotron;