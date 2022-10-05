import React from 'react';
import Back from '../background/Background';
import '../background/Background.css';
import './About.css';
import NavBar from '../NavBar';
import background from '../../images/jeje.jpeg';
import me from '../../images/me.jpeg';
import data from '../../images/1.jpg';

function About() {
	return (
		<div>
			<NavBar />
			<div id='profile'>
				<img
					className='img'
					src={me}
					alt='profileimage'
					style={{
						height: '200px',
						marginTop: '3%',
						marginBottom: '3%',
						borderRadius: '100%',
					}}
				/>
			</div>
			<div className='content'>
				<h2 className='text'>
					I'm glad you are here! I'm Trini I'm 23 years old from
					Buenos Aires, Argentina. I am looking to join a team where I
					can contribute based on my project experiences and continue
					to grow as a developer.
					<br /> <br /> I was introduced to programming while taking a
					statistics class in university and was instantly hooked by
					it. The following year, I decided to immerse myself in a
					bootcamp to study programming intensively.
					<br /> <br />
					Being people oriented motivated me to volunteer as Teaching
					Assistant. I had the chance to lead students and revise
					programming concepts in a group environment. During the
					bootcamp I made various projects including an individual one
					'Foods' and a group project 'E-commerce Bookstore' where we
					had the exciting and rewarding chance to work and experience
					agile methodologies. Now, I continue looking for challenges
					to further expand my knowledge. You can find more of my
					projects in the Home page and my GitHub profile.
					<br /> <br />
					<br />
					I consider myself a very proactive person, fast learner,
					team worker and very curious. It is my believe that team
					work and recieveing opinions from fellow programmers are one
					of the fastest ways to finish quality projects and gain
					developer expertise.
					<br />
				</h2>
			</div>
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

			<div>
				<img
					id='myback'
					src={background}
					alt='imgback'
					style={{
						position: 'absolute',
						width: '100%',
						height: '90%',
						marginTop: '90px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<img id='datame' src={data} alt='data' />
				</div>
			</div>
			<Back />
		</div>
	);
}
export default About;
