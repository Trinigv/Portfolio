import Card from 'react-bootstrap/Card';
import './cards.css';
import bookovich from '../../images/bookovich.png';

function Cards() {
	return (
		<Card>
			<Card.Body id='card'>
				<div id='complete'>
					<h3 id='cardtitle'>E-Commerce Bookstore</h3>
					<div id='imgposition'>
						<img id='cardimg' src={bookovich} alt='loading' />
					</div>
					<div className='text'>
						✔️ Created fundametal database models and Entity
						Relationship Diagram <br /> ✔️ Programmed 'Register' and
						'Log In' routes for webpage users <br /> ✔️ Pogrammed a
						middleware to generate JSON Web Token with Passport JS{' '}
						<br /> ✔️ Configured Firebase authentication <br /> ✔️
						Coded Google registration routes to incorporate Google
						users to our database
						<br /> ✔️ Connected backend routes of cart changes to
						frontend funcionallity <br /> ✔️ Programmed mailing
						logic in React frontend
					</div>
					<div className='button'>
						<div>
							<form>
								<button
									className='but'
									formaction='https://e-commerce-book-store.vercel.app/'>
									Go to web page
								</button>
							</form>
						</div>
						<div>
							<form>
								<button
									className='but'
									formaction='https://github.com/Trinigv/E-commerce-BookStore'>
									Code
								</button>
							</form>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Cards;
