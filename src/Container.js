import './App.css';
import Back from './components/background/Background';
import Cards from './components/cards/cards';
import Pills from './components/NavBar';
import Cardsapi from './components/cards/cardapi';
import Cardsfood from './components/cards/cardsfood';
import Contact from './components/ContactInfo/ContactInfo';
import React from 'react';
import { motion } from 'framer-motion';
import Zoom from 'react-reveal/Zoom';

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
			<Zoom>
				<div className='cards'>
					{' '}
					<Cards />
				</div>
			</Zoom>
			<Zoom>
				<div className='cards'>
					<Cardsapi />
				</div>
			</Zoom>
			<Zoom>
				<div className='cards'>
					<Cardsfood />
				</div>
			</Zoom>
			<div>
				<Contact />
			</div>

			<Back />
		</motion.div>
	);
}

export default Container;
