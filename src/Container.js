import './App.css';
import Back from './components/background/Background';
import Cards from './components/cards/cards';
import Pills from './components/NavBar';
import Cardsapi from './components/cards/cardapi';
import Cardsfood from './components/cards/cardsfood';
import Contact from './components/ContactInfo/ContactInfo';
import React from 'react';

function Container() {
	return (
		<div>
			<div id='nav'>
				<Pills />
			</div>
			<div>
				<p id='title'>Trini Garcia Valicente</p>
				<h6>
					I'm a Full Stack Web Developer with a special interest in
					Backend Development and open to specialize myself.
					Currently, I'm looking to join a team where I can implement
					and contribute with my skills as well as continuing to
					cultiavte my coding knwoledge. I have expertise in Node,
					Express, mySQL, postgreSQL, React, Redux, Swagger
					Documentation, Passport JS, HTML and CSS.
				</h6>
			</div>
			<div className='cards'>
				{' '}
				<Cards />
			</div>
			<div className='cards'>
				<Cardsapi />
			</div>
			<div className='cards'>
				<Cardsfood />
			</div>

			<div>
				<Contact />
			</div>

			<Back />
		</div>
	);
}

export default Container;
