import React from 'react'

const ResetButton = ({onClick}) => {
	return (
		<div className="reset-button">
			<button onClick={onClick}>Reset</button>
		</div>
	)
}

export default ResetButton