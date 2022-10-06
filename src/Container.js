import './App.css';
import Back from './components/background/Background';
import Cards from './components/cards/cards';
import Pills from './components/NavBar';
import Cardsapi from './components/cards/cardapi';
import Cardsfood from './components/cards/cardsfood';
import Contact from './components/ContactInfo/ContactInfo';
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	hidden: {
		opacity: 0.7,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.3 },
	},
	exit: {
		transition: { ease: 'easeInOut' },
	},
};

function Container() {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<div id='nav'>
				<Pills />
			</div>
			<div>
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
		</motion.div>
	);
}

export default Container;
