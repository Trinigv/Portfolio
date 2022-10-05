import './landing.css';
import Back from '../landingbackground/LandingBack';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Landing({ isVisible }) {
	return (
		<div>
			<motion.div animate={{ opacity: isVisible ? 0 : 1 }} />
			<div id='landingtitle'>
				<h1>Welcome to my portfolio.</h1>
			</div>
			<div id='secondtitle'>
				{' '}
				<h3>
					{' '}
					I'm Trinidad a Full Stack Web Developer with experience in
					mutiple projects. I'm glad you are here! Come take a look.
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
			</div>
			<Back />
		</div>
	);
}

export default Landing;
