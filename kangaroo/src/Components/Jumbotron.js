import React from 'react';
import './components.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Jumbotron = props => {
	return (
		<div className='jumbotron jumbotron-fluid'>
			<div className='text-center'>
				<Row>
					<Col>
						<img
							src='/images/LogoOne.png'
							className='img-fluid'
							alt='Kangaroo Logo'
						></img>
					</Col>
				</Row>
				<br></br>
				<Container>
					<Row>
						<Col>
							<a
								href='/search'
								role='button'
								className='btn btn-warning btn-lg'
							>
								Search for Lease
							</a>
						</Col>
						<Col>
							<button
								className='btn btn-primary btn-lg'
								onClick={props.onClick}
							>
								Register
							</button>{' '}
							<a href='/login' role='button' className='btn btn-success btn-lg'>
								Log In
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Jumbotron;
