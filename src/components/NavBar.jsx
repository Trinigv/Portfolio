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
				{location.pathname === '/' ? (
					<div className='right'>
						<Nav.Item>
							<Link
								to='/home'
								style={{
									textDecoration: 'none',
								}}>
								<button className='navbarbutton'>
									Projects
								</button>
							</Link>
						</Nav.Item>
					</div>
				) : (
					<div>
						<Link
							to='/'
							style={{
								textDecoration: 'none',
							}}>
							<button className='navbarbutton'>
								Welcome Page
							</button>
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
