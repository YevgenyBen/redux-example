import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';
import { useDispatch } from 'react-redux';
import { actions } from './actions';

function App() {
	const dispatch = useDispatch();
	const handleClick = event => {
		dispatch(actions[event.target.name](event.target.name));
	};
	return (
		<div className="App">
			<div>
				<button name={'INCREMENT'} onClick={handleClick}>
					Plus
				</button>
				<button name={'DECREMENT'} onClick={handleClick}>
					Minus
				</button>
			</div>
			<div>
				<CounterComponent initCounter={0} />
			</div>
		</div>
	);
}

export default App;
