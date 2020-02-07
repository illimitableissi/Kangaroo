import React from 'react';

const SearchResults = (props) => {
    return (
        <div className="card border-success mb-3">
          <img src={props.image} class="card-img-top" alt="..." />
        <div className="card-body text-success">
          <div data-aos="fade-left">
          <h5 className="card-title">Location: {props.location}</h5>
          <p className="card-text">Price: {props.price}</p>
          <p className="card-text">Rooms: {props.rooms}</p>
          <p className="card-text">Sqft: {props.sqft}</p>
          <p className="card-text">Available Move in Date: {props.moveIn}</p>
          </div>
          <br />
          <a href={props.link} className="btn btn-success">More Information</a>          
          <button className="btn btn-primary" onClick={props.onClick}>Contact</button>
          </div>
        </div>
    );
};

export default SearchResults;