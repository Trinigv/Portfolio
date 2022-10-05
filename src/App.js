import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/about/About';
import Landing from './components/landing/landing';
import Container from './Container';
import { AnimatePresence } from 'framer-motion';

function App({ isVisible }) {
	return (
		<div>
			<AnimatePresence>
				<Route exact path='/' component={Landing} />{' '}
				<Route exact path='/home' component={Container} />{' '}
				<Route exact path='/about' component={About} />
			</AnimatePresence>
		</div>
	);
}

export default App;
