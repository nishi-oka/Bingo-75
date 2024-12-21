import React from 'react';

const StartButton = ({ onClick  }) => {
	return (
		<div className="start-button">
			<button onClick={onClick}>BINGO START</button>
		</div>
	);
};

export default StartButton;