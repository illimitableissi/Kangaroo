import React from 'react';
import '../addresses.json';
import './components.css';

const SearchForm = ({ children, handleChange, handleInput }) => {
	return (
		<div className='d-flex justify-content-center text-center'>
			<form className='text-center'>
				<div className='form-group text-center'>
					<label for='location'>
						<b>Location:</b>
					</label>
					<select
						className='form-control form-control-sm'
						onChange={handleChange}
					>
						{children}
					</select>
				</div>
				<div className='form-group text-center'>
					<label for='price'>
						<b>Price:</b>
					</label>
					<input
						className='form-control form-control-sm'
						onChange={handleInput}
					/>
				</div>
				{/* <div className="form-group"> 
                    <label for="rooms">Amount of Rooms?</label>
                    <input className="form-control form-control-sm"></input>
                </div>
                 <div className="form-group">
                    <label for="negotiable">Price Negotiable?</label>
                    <select className="form-control form-control-sm">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="pets">Pet Friendly?</label>
                    <select className="form-control form-control-sm">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>  */}
			</form>
		</div>
	);
};

export default SearchForm;
