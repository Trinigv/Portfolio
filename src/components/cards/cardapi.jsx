import Card from 'react-bootstrap/Card';
import './cards.css';
import swagger from '../../images/swagger.png';

function Cardsapi() {
	return (
		<Card id='card'>
			<Card.Body id='complete'>
				<h3 id='cardtitle'>REST API</h3>
				<div id='imgposition'>
					<img id='cardimg' src={swagger} alt='loading' />
				</div>
				<div className='text'>
					Technical challenge consisting of a REST api using mySQL,
					Sequelize, Node, Express and Heroku for deployment. The goal
					was to have available the following features: creating and
					editing projects, assigning users to a project, deleting
					projects, finding by project name and a pagination for all
					the projects. Deployed in Heroku and with Swagger
					documentation.
				</div>
				<div className='button'>
					<div>
						<form>
							<button
								className='but'
								formaction='https://esto-es-backend.herokuapp.com/'>
								Go to web page
							</button>
						</form>
					</div>
					<div>
						<form>
							<button
								className='but'
								formaction='https://github.com/Trinigv/esto-es'>
								Code
							</button>
						</form>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Cardsapi;
