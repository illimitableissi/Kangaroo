import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MyNavbar extends React.Component {
	render() {
		return (
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='/'>
					<img
						src='/images/icon.PNG'
						width='30'
						height='30'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
					Kangaroo
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/api/users'>Users API</Nav.Link>
						<Nav.Link href='/api/listings'>Listings API</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MyNavbar;
