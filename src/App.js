import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Landing from './components/landing/landing';
import Container from './Container';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Landing} />{' '}
				<Route exact path='/home' component={Container} />{' '}
				<Route exact path='/about' component={About} />
			</Switch>
		</div>
	);
}

export default App;
