import React from 'react';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
};

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { counter: 0 };
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	decrement() {
		this.setState({
			counter: this.state.counter - 1
		});
	}

	reset() {
		this.setState({
			counter: 0
		});
	}

	render() {
		return (
			<div style={styles}>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.reset}>Reset</button>
				<h2>Current Count: {this.state.counter}</h2>
			</div>
		);
	}
}
