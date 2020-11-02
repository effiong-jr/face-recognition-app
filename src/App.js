import { useState } from 'react'
import Clarifai from 'clarifai'
import Particles from 'react-tsparticles'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ImageRecognition from './components/ImageRecognition/ImageRecognition'
import './App.css'

function App() {
	const [inputValue, setInputValue] = useState('')

	const app = new Clarifai.App({
		apiKey: '18174d644d1e4906aab5678236919717',
	})

	const particlesOptions = {
		fpsLimit: 60,
		interactivity: {
			detectsOn: 'canvas',
			events: {
				onClick: {
					enable: true,
					mode: 'push',
				},
				onHover: {
					enable: true,
					mode: 'repulse',
				},
				resize: true,
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 10,
				},
				push: {
					quantity: 4,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: '#ffffff',
			},
			links: {
				color: '#ffffff',
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1,
			},
			collisions: {
				enable: true,
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 6,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					value_area: 800,
				},
				value: 10,
			},

			shape: {
				type: 'circle',
			},
			size: {
				random: true,
				value: 5,
			},
		},
		detectRetina: true,
	}

	const handleInputChange = (event) => {
		console.log(event.target.value)
	}

	const handleImageSubmit = () => {
		console.log('Image submitted')
		app.models
			.initModel({
				id: Clarifai.GENERAL_MODEL,
				version: 'aa7f35c01e0642fda5cf400f543e7c40',
			})
			.then((generalModel) => {
				return generalModel.predict(
					'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
				)
			})
			.then((response) => {
				console.log(response)
				var concepts = response['outputs'][0]['data']['concepts']
				console.log(concepts)
			})

		// app.models
		// 	.predict(Clarifai.GENERAL_MODEL, { base64: 'G7p3m95uAl...' })
		// 	.then(
		// 		function (response) {
		// 			// do something with response
		// 			console.log(response)
		// 		},
		// 		function (err) {
		// 			// there was an error
		// 			console.log(err.response)
		// 		}
		// 	)
	}

	return (
		<div className='App'>
			<Particles className='particles' options={particlesOptions} />
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm
				handleInputChange={handleInputChange}
				handleImageSubmit={handleImageSubmit}
			/>

			<ImageRecognition />
		</div>
	)
}

export default App
