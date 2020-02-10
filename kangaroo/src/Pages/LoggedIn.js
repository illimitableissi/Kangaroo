import React from 'react';
import Nav from '../Components/Nav';
import API from '../utils/API';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class LoggedIn extends React.Component {
	state = {
		show: true,
		userName: '',
		password: '',
		users: [],
		user: [],
		id: '',
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
		console.log(this.state.user);
	};

	pullUserData = () => {
		API.getIdByPassword(this.state.password)
			.then(res => {
				this.setState({ user: res.data });
				this.loadUsers();
			})
			.catch(err => console.log(err));
		this.setState({ show: false });
		console.log('this worked');
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
		console.log(value);
	};

	closeModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div>
				<Modal show={this.state.show}>
					<Modal.Dialog>
						<Modal.Header>
							<Modal.Title>Login</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group controlId='userName'>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type='text'
										name='userName'
										onChange={this.handleInputChange}
										value={this.state.userName}
									/>
								</Form.Group>
								<Form.Group controlId='password'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='text'
										name='password'
										onChange={this.handleInputChange}
										value={this.state.password}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							{this.state.users.map(user => (
								<Button
									variant='primary'
									disabled={
										(this.state.userName !== user.userName) |
										(this.state.password !== user.password)
									}
									onClick={this.pullUserData}
								>
									Submit
								</Button>
							))}
						</Modal.Footer>
					</Modal.Dialog>
				</Modal>
				<Card>
					{this.state.user.map(user => (
						<a
							className='btn btn-success'
							role='button'
							href={'/user/' + user._id}
						>
							View Your Page
						</a>
					))}
				</Card>
			</div>
		);
	}
}

export default LoggedIn;
