import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import Parallax from '../Components/Parallax';
// import { Container, Row, Column } from '../Components/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Components/Card';
import Images from '../Components/Images';
import Nav from '../Components/Nav';
import Modal from 'react-bootstrap/Modal';
import API from '../utils/API';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyVerticallyCenteredModal = ({ children, onClick, ...rest }) => {
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
						Registration:
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

class HomePage extends React.Component {
	state = {
		users: [],
		show: false,
		userName: '',
		password: '',
		name: ''
	};

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = () => {
		API.getUsers()
			.then(res => {
				this.setState({ users: res.data });
			})
			.catch(err => console.log(err));
		console.log(this.state.users);
	};

	openModal = () => {
		this.setState({ show: true });
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

	userCreate = e => {
		e.preventDefault();
		if (this.state.name && this.state.userName && this.state.password) {
			API.createUser({
				name: this.state.name,
				userName: this.state.userName,
				password: this.state.password
			})
				.then(res => this.loadUsers())
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
				>
					<Form>
						<Form.Group controlId='name'>
							<Form.Label>Enter Your Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								placeholder='John Doe'
								onChange={this.handleInputChange}
								value={this.state.name}
							/>
						</Form.Group>
						<Form.Group controlId='userName'>
							<Form.Label>Username:</Form.Label>
							<Form.Control
								type='text'
								name='userName'
								placeholder='jdoe123'
								onChange={this.handleInputChange}
								value={this.state.userName}
							/>
						</Form.Group>
						<Form.Group controlId='password'>
							<Form.Label>Password:</Form.Label>
							<Form.Control
								type='password'
								name='password'
								onChange={this.handleInputChange}
								value={this.state.password}
							/>
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							disabled={
								!(this.state.name && this.state.userName && this.state.password)
							}
							onClick={this.userCreate}
						>
							Register
						</Button>
					</Form>
				</MyVerticallyCenteredModal>
				<Parallax>
					<Jumbotron onClick={this.openModal} />
					<Container>
						<br />
						<Card
							title='What is Kangaroo?'
							message='Kangaroo is a subleasing website that allows users to post and search for available subleasing agreements.'
							img='/images/lease.PNG'
							aos='fade-right'
						/>
						<Card
							title='Want to find a place to live?'
							message='Just click the "Search for Lease" button to get started. From there, you can filter results by location, price, and more.'
							img='/images/packing.PNG'
							aos='fade-left'
						/>
						<Card
							title='Want to sublease your place?'
							message="First, you'll need to register a free account with us. Simply click the 'Register' button (or 'Login' if you already have an account), log in, and start posting!"
							img='/images/box.PNG'
							aos='zoom-in'
						/>
					</Container>
				</Parallax>
			</div>
		);
	}
}

export default HomePage;
