const initialState = {
	counter: 0,
};

const CounterReducer = (state = initialState, action) => {
	console.log('reducer');
	switch (action.type) {
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1,
			};
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1,
			};
		default:
			return state;
	}
};

export default CounterReducer;
