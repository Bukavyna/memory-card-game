import React from 'react';

import './counter.css'

const Counter = ({ count }) => {

	return (
		<div className="count-container">
			<h2 className="count">Attempts: {count}</h2>
		</div>
	)
}

export default Counter;