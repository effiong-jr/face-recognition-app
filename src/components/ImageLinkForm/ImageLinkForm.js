const ImageLinkForm = ({ handleInputChange, handleImageSubmit }) => {
	return (
		<div className='f3'>
			<p>
				This magic brain will detect a face in your pictures. Give it a
				try.
			</p>
			<div className='center '>
				<div className='shadow-5 br3 pa4 center mw-80'>
					<input
						className='pa2 f4 w-70 center'
						type='url'
						placeholder='Enter Image URL'
						onChange={handleInputChange}
					/>
					<button
						className='w-30 grow f4 link ph3 pv3 dip white bg-light-purple pointer'
						onClick={handleImageSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm
