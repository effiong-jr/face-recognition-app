import { useState } from 'react'
import Clarifai from 'clarifai'
import Particles from 'react-tsparticles'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

function App() {
	const [inputValue, setInputValue] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const [box, setBox] = useState({})

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
		setInputValue(event.target.value)
	}

	const calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box

		const image = document.getElementById('inputImage')
		const width = Number(image.width)
		const height = Number(image.height)

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		}
	}

	const displayFaceBox = (box) => {
		console.log(box)
		setBox(box)
	}

	const handleImageSubmit = () => {
		setImageUrl(inputValue)
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, inputValue)
			.then((response) => {
				// do something with response
				displayFaceBox(calculateFaceLocation(response))
			})
			.catch((error) => {
				console.log(error.response)
			})
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

			<FaceRecognition box={box} imageUrl={imageUrl} />
		</div>
	)
}

export default App
