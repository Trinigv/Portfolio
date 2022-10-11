import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import '../background/Background.css';

const Back = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: '#C8C6C6',
					},
				},
				fpsLimit: 120,

				interactivity: {
					detectsOn: 'window',
					events: {
						onhover: {
							enable: true,
							mode: 'trail',
						},
						onclick: {
							enable: true,
							mode: 'push',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 0.8,
							speed: 2,
						},
						repulse: {
							distance: 200,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
						trail: {
							delay: 0.005,
							quantity: 1,
							pauseOnStop: true,
						},
					},
				},
				particles: {
					color: {
						value: '#080808',
					},
					links: {
						color: '#ffffff',
						distance: 5,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						directions: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 100,
					},
					opacity: {
						value: 5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 3 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default Back;
