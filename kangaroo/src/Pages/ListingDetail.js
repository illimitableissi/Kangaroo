import React from 'react';
import Nav from '../Components/Nav';
import API from '../utils/API';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../Components/details.css';

class ListingDetail extends React.Component {
	state = {
		listing: {}
	};

	componentDidMount() {
		API.getId(this.props.match.params.id)
			.then(res => this.setState({ listing: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className='listingBody'>
				<Nav />

				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={this.state.listing.image}
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/images/apartment-complex.jpg'
							alt='Second slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/images/interior.jpg'
							alt='Third slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/images/pool.jpg'
							alt='Fourth slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='/images/insideApartment.jpg'
							alt='Fifth slide'
						/>
					</Carousel.Item>
				</Carousel>
				<Card className='bg-dark text-center' data-aos='zoom-in'>
					<Card.Img
						src='/images/gray.jpg'
						alt='Card image'
						className='cardImage'
					/>
					<Card.ImgOverlay>
						<Card.Title style={{ fontSize: 32 }}>
							<u>Property Information</u>
						</Card.Title>
						<Card.Text
							data-aos='fade-right'
							data-aos-duration='2000'
							style={{ fontSize: 22 }}
						>
							<p>
								<b>Location:</b> {this.state.listing.location}
							</p>
							<p>
								<b>Price:</b> ${this.state.listing.price}
							</p>
							<p>
								<b>Rooms:</b> {this.state.listing.rooms}
							</p>
							<p>
								<b>Square Footage:</b> {this.state.listing.sqft}
							</p>
							<p>
								<b>Available Move in Date:</b>{' '}
								{this.state.listing.dateAvailable}
							</p>
							<p>
								<b>Minimum Lease (Months):</b>{' '}
								{this.state.listing.minLeaseByMonth}
							</p>
							<p>
								<b>Price Negotiable:</b> {this.state.listing.negotiable}
							</p>
							<p>
								<b>Pet Friendly:</b> {this.state.listing.petFriendly}
							</p>
							<p>
								<b>Address:</b> {this.state.listing.address}
							</p>
							<p>
								<b>Property Details:</b> {this.state.listing.propertyDetails}
							</p>
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
				<a href='/search' role='button' className='btn btn-danger'>
					Go Back
				</a>
			</div>
		);
	}
}
export default ListingDetail;
