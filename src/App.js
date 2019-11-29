import React from 'react';
import './App.css';
import OrderBook from './components/OrderBook';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<OrderBook />
			</div>
		);
	}
}

export default App;
