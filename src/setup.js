import React from 'react';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
};

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div style={styles}>
				<button>+</button>
				<button>-</button>
				<button>Reset</button>
				<h2>Current Count: </h2>
			</div>
		);
	}
}
