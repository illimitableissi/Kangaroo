import React from 'react';
import SearchForm from '../Components/SearchForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResults from '../Components/SearchResults';
import Nav from '../Components/Nav';
import API from '../utils/API';
import Parallax from '../Components/Parallax';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyVerticallyCenteredModal = ({
	children,
	onClick,
	selectedCard,
	...rest
}) => {
	return (
		<Modal
			{...rest}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title id='contained-modal-title-vcenter'>
						Enter Your Contact Information
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button onClick={onClick}>Close</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</Modal>
	);
};

class Search extends React.Component {
	state = {
		listings: [],
		filters: [],
		location: '',
		price: '',
		rooms: '',
		moveIn: '',
		negotiable: '',
		pets: '',
		address: '',
		lease: '',
		sqft: '',
		show: false,
		selectedCard: {},
		messages: [],
		fullName: '',
		email: '',
		phoneNumber: '',
		id: ''
	};

	componentDidMount() {
		this.loadListings();
	}

	loadListings = () => {
		API.getListings()
			.then(res => {
				this.setState({
					listings: res.data,
					filters: res.data.filter(
						(thing, index, self) =>
							index === self.findIndex(t => t.location === thing.location)
					)
				});
			})
			.catch(err => console.log(err));
	};

	filter = location => {
		API.getListing(location)
			.then(res => {
				this.setState({ listings: res.data });
			})
			.catch(err => console.log(err));
	};

	findPrice = price => {
		API.getPrice(price)
			.then(res => {
				this.setState({ listings: res.data });
			})
			.catch(err => console.log(err));
	};

	openModal = listing => {
		this.setState({ show: true, selectedCard: listing, id: listing._id });
	};

	closeModal = () => {
		this.setState({ show: false });
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
		console.log(value);
	};

	sendMessage = e => {
		e.preventDefault();
		if (this.state.fullName && this.state.email) {
			API.contact(this.state.id, {
				fullName: this.state.fullName,
				email: this.state.email,
				phoneNumber: this.state.phoneNumber
			})
				.then(res => this.loadListings())
				.catch(err => console.log(err));
		}
		this.setState({ show: false });
		console.log('this works');
	};

	render() {
		return (
			<div>
				<MyVerticallyCenteredModal
					show={this.state.show}
					onClick={this.closeModal}
					selectedCard={this.state.selectedCard}
				>
					<Form>
						<Form.Group controlId='name'>
							<Form.Label>Enter Full Name</Form.Label>
							<Form.Control
								type='text'
								name='fullName'
								placeholder='Full Name'
								onChange={this.handleInputChange}
								value={this.state.fullName}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								name='email'
								placeholder='Enter email'
								onChange={this.handleInputChange}
								value={this.state.email}
							/>
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId='phoneNumber'>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type='text'
								placeholder='xxx-xxx-xxxx'
								name='phoneNumber'
								onChange={this.handleInputChange}
								value={this.state.phoneNumber}
							/>
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							disabled={!(this.state.fullName && this.state.email)}
							onClick={this.sendMessage}
						>
							Submit
						</Button>
					</Form>
				</MyVerticallyCenteredModal>
				<Parallax>
					<Nav />
					<Row>
						<Col>
							<SearchForm
								handleChange={e => {
									if (e.target.value) {
										this.filter(e.target.value);
									} else {
										this.loadListings();
									}
								}}
								handleInput={e => {
									if (e.target.value) {
										this.findPrice(e.target.value);
									} else {
										this.loadListings();
									}
								}}
							>
								<option></option>
								{this.state.filters.map(listing => (
									<option>{listing.location}</option>
								))}
								;
							</SearchForm>
						</Col>
					</Row>
					<Row>
						{this.state.listings.map(listing => {
							return (
								<SearchResults
									image={listing.image}
									location={listing.location}
									price={listing.price}
									rooms={listing.rooms}
									sqft={listing.sqft}
									moveIn={listing.dateAvailable}
									link={'/listing/' + listing._id}
									onClick={() => {
										this.openModal(listing);
									}}
								/>
							);
						})}
					</Row>
				</Parallax>
			</div>
		);
	}
}

export default Search;
