import React from 'react';
import API from '../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from '../Components/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Components/details.css';

function pullListingsByUsername(userName) {
	return API.getUserName(userName);
}

class YourPage extends React.Component {
	state = {
		user: [],
		listings: []
	};

	componentDidMount() {
		API.getUser(this.props.match.params.id).then(user => {
			this.setState({ user: user.data });
			pullListingsByUsername(this.state.user.userName).then(listing => {
				this.setState({ listings: listing.data });
				if (this.state.listings.userName) {
					console.log(this.state.listings[0].userName);
				}
				return this.state;
			});
		});
	}

	deleteListing = id => {
		API.deleteListing(id).then(window.location.reload());
	};

	render() {
		return (
			<div className='userBody'>
				<Nav />
				<h2>Welcome, {this.state.user.name}!</h2>
				<a className='btn btn-danger' href='/'>
					Logout
				</a>
				<a
					className='btn btn-success'
					href={'/user/' + this.state.user._id + '/form'}
				>
					Create Listing
				</a>
				<br></br>
				<br></br>
				<Container fluid className='pageC'>
					<Row>
						<Col>
							<Container fluid className='text-center'>
								<h3>
									<u>Prospective Leasers:</u>
								</h3>
								{this.state.listings.map(listing => (
									<Card>
										<Card.Header>Listing Id: {listing._id}</Card.Header>
										{listing.messages.map(message => (
											<Card.Body>
												<Card.Text>
													<b>Name:</b> {message.fullName}
												</Card.Text>
												<Card.Text>
													<b>Email:</b> {message.email}
												</Card.Text>
												<Card.Text>
													<b>Phone Number:</b> {message.phoneNumber}
												</Card.Text>
											</Card.Body>
										))}
									</Card>
								))}
							</Container>
						</Col>
						<Col xs md={8}>
							<Container fluid className='text-center'>
								<h3>
									<u>Your Listings:</u>
								</h3>
								{this.state.listings.map(listing => (
									<Card>
										<Card.Header style={{ fontSize: 28 }}>
											Listing Id: {listing._id}
										</Card.Header>
										<Card.Img variant='top' src={listing.image} />
										<Card.Body style={{ fontSize: 20 }}>
											<Card.Text>Location: {listing.location}</Card.Text>
											<Card.Text>Price: {listing.price}</Card.Text>
											<Card.Text>Rooms: {listing.rooms}</Card.Text>
											<Card.Text>Sqft: {listing.sqft}</Card.Text>
											<Card.Text>Negotiable: {listing.negotiable}</Card.Text>
											<Card.Text>Pet Friendly: {listing.petFriendly}</Card.Text>
											<Card.Text>
												Date Available: {listing.dateAvailable}
											</Card.Text>
											<Card.Text>
												Minimum Lease: {listing.minLeaseByMonth}
											</Card.Text>
											<Card.Text>Address: {listing.address}</Card.Text>
											<Button
												variant='danger'
												onClick={() => this.deleteListing(listing._id)}
											>
												Delete Listing
											</Button>
										</Card.Body>
									</Card>
								))}
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default YourPage;
