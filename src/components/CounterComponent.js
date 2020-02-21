import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function CounterComponent({ initCounter }) {
	var counter = useSelector(state => state.CounterReducer.counter);
	// console.log(counter);
	return (
		<div>
			<h1>{counter ? counter : initCounter}</h1>
		</div>
	);
}

export default CounterComponent;
