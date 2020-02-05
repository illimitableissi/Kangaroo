import React from 'react';

const SearchResults = (props) => {
    return (
        <div className="card border-success mb-3">
         <img src={props.img} className="card-img" alt="..."></img>
        <div className="card-body text-success">
          <div data-aos="fade-left">
          <h5 className="card-title">Location: {props.location}</h5>
          <p className="card-text">Price: {props.price}</p>
          <p className="card-text">Rooms: {props.rooms}</p>
          <p className="card-text">Sqft: {props.sqft}</p>
          <p className="card-text">Available Move in Date: {props.moveIn}</p>
          <p className="card-text">Minimum Lease by Month: {props.lease}</p>
          <p className="card-text">Negotiable: {props.negotiable}</p>
          <p className="card-text">Pet Friendly: {props.pets}</p>
          <p className="card-text">Address: {props.address}</p>
          </div>
          <br />          
          <a href={props.link} className="btn btn-primary">Contact</a>
          </div>
        </div>
    );
};

export default SearchResults;