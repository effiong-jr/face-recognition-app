import './FaceRecognition.css'

const ImageRecognition = ({ imageUrl, box }) => {
	return (
		<div className='ma center'>
			<div className='absolute mt2'>
				{imageUrl !== '' && (
					<img
						id='inputImage'
						src={imageUrl}
						alt='faceInImage'
						width='500px'
						height='auto'
					/>
				)}
				<div
					className='bounding-box'
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol,
					}}
				></div>
			</div>
		</div>
	)
}

export default ImageRecognition
