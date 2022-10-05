import Card from 'react-bootstrap/Card';
import './cards.css';

function Cards() {
	return (
		<Card>
			<Card.Body id='card'>
				<div id='complete'>
					<div className='text'>
						<h3 id='cardtitle'>Foods</h3>
						Single Page Web application using Spoonacular API where
						you can create, search, filter and sort different
						recipes. I coded the database using posgreSQL, Sequelize
						and used Node and Express for the backend Routes. For
						the frontend I used React, Redux and CSS modules.
					</div>
					<div>
						<form style={{ padding: '2%' }}>
							<button
								className='but'
								formaction='https://github.com/Trinigv/Pi-Foods'>
								Code
							</button>
						</form>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Cards;
