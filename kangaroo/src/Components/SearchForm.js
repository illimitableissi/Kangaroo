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
			</form>
		</div>
	);
};

export default SearchForm;
