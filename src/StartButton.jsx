import React from 'react';

const StartButton = ({ onClick, isDisabled }) => {
	return (
		<div className="start-button">
			<button onClick={onClick} disabled={isDisabled}>PUSH</button>
		</div>
	);
};

export default StartButton;