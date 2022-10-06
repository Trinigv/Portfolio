import './landing.css';
import Back from '../landingbackground/LandingBack';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
	hidden: {
		opacity: 0.3,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.5 },
	},
	exit: {
		transition: { ease: 'easeInOut' },
	},
};

function Landing() {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<div id='landingtitle'>
				<h1 id='welcome'>Welcome to my portfolio.</h1>
			</div>
			<div id='secondtitle'>
				{' '}
				<h3>
					{' '}
					I'm Trinidad a Full Stack Web Developer. I'm glad you are
					here! Come take a look.
				</h3>
			</div>
			<div id='landingbutton'>
				<Link
					to='/home'
					style={{
						textDecoration: 'none',
					}}>
					<button id='landbutton'> See projects → </button>
				</Link>
			</div>
			<div id='play'>
				{' '}
				<h3>Or play with the background...! </h3>
				<Back />
			</div>
		</motion.div>
	);
}

export default Landing;
