import React from 'react';
import{Container, Row, Column} from './Grid'
import '../addresses.json'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="location">Location?</label>
                    <select className="form-control">
                        <option>{props.option}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="price">Price?</label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="rooms">Amount of Rooms?</label>
                    <input className="form-control"></input>
                </div>
                 <div className="form-group">
                    <label for="negotiable">Price Negotiabie?</label>
                    <select className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="pets">Pet Friendly?</label>
                    <select className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </form>
         </div>
    );
};

export default SearchForm;