import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Pills() {
	const saveFile = () => {
		saveAs('https://docdro.id/CKKbGBh');
	};
	const location = useLocation();
	return (
		<Nav variant='pills' defaultActiveKey='/home' className='Nav'>
			<div className='items'>
				{location.pathname === '/' ? (
					<div className='right' id='pro'>
						<Nav.Item>
							<Link
								to='/home'
								style={{
									textDecoration: 'none',
									color: 'black',
								}}>
								Projects
							</Link>
						</Nav.Item>
					</div>
				) : (
					<div className='right'>
						<Link
							to='/'
							style={{
								textDecoration: 'none',
								color: 'white',
							}}>
							Welcome Page
						</Link>
					</div>
				)}
				<Nav.Item className='right' onClick={saveFile}>
					Resume
				</Nav.Item>
			</div>
		</Nav>
	);
}

export default Pills;
