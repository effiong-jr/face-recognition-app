const Rank = ({ user, entries }) => {
	return (
		<div>
			<div className='white f3'>
				[ {`${user.name}, your total entries is...] `} ]
				<div>{`#${entries}`}</div>
			</div>
		</div>
	)
}

export default Rank
