import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Pills() {
	const saveFile = () => {
		saveAs('https://docdro.id/RB5Eo5A', 'triniCV.pdf');
	};
	const location = useLocation();
	return (
		<Nav variant='pills' defaultActiveKey='/home' className='Nav'>
			<div className='items'>
				{location.pathname === '/about' ? (
					<div className='right'>
						<Nav.Item>
							<Link
								to='/'
								style={{
									textDecoration: 'none',
								}}>
								<button className='navbarbutton'>Home</button>
							</Link>
						</Nav.Item>
					</div>
				) : (
					<div>
						<Link
							to='/about'
							style={{
								textDecoration: 'none',
							}}>
							<button className='navbarbutton'>About Me</button>
						</Link>
					</div>
				)}
				<Nav.Item className='right'>
					<button className='navbarbutton' onClick={saveFile}>
						Download CV
					</button>
				</Nav.Item>
			</div>
		</Nav>
	);
}

export default Pills;
