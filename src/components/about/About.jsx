import React from 'react';
import '../background/Background.css';
import './About.css';
import me from '../../images/finalprofile.jpeg';
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

function About() {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<div
				className='about'
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}>
				<div id='profile'>
					<img
						id='trini'
						src={me}
						alt='profileimage'
						style={{
							display: 'flex',
							marginRight: '150px',
							height: '320px',
							width: '330px',
						}}
					/>
				</div>
				<div className='content'>
					<h2 className='text'>
						I'm glad you are here! I'm Trini I'm 23 years old from
						Buenos Aires, Argentina. I am looking to join a team
						where I can contribute based on my project experiences
						and continue to grow as a developer.
						<br /> <br /> I was introduced to programming while
						taking a statistics class in university and was
						instantly hooked by it. The following year, I decided to
						immerse myself in a bootcamp to study programming
						intensively.
						<br /> <br />
						Being people oriented motivated me to volunteer as
						Teaching Assistant. I had the chance to lead students
						and revise programming concepts in a group environment.
						During the bootcamp I made various projects including an
						individual one 'Foods' and a group project 'E-commerce
						Bookstore' where we had the exciting and rewarding
						chance to work and experience agile methodologies. Now,
						I continue looking for challenges to further expand my
						knowledge. You can find more of my projects in the Home
						page and my GitHub profile.
						<br /> <br />
						<br />
						I consider myself a very proactive person, fast learner,
						team worker and very curious. It is my believe that team
						work and recieveing opinions from fellow programmers are
						one of the fastest ways to finish quality projects and
						gain developer expertise.
						<br />
					</h2>
				</div>
			</div>

			<hr />
			<div className='aboutbuttons'>
				<div>
					<form>
						<button
							className='b'
							formaction='https://www.linkedin.com/in/trinidad-garcia-valicente-fullstackdeveloper/'>
							LinkedIn
						</button>
					</form>
				</div>
				<div>
					<form>
						<button
							className='b'
							formaction='https://github.com/Trinigv'>
							GitHub
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	);
}
export default About;
