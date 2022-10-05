import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/about/About';
import Container from './Container';

function App() {
	return (
		<div>
			<Route exact path='/home' component={Container} />
			<Route exact path='/about' component={About} />
		</div>
	);
}

export default App;
