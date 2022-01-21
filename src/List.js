import React from 'react';
import ReactDOM from 'react-dom';

export default function List({ data }) {
	return (
		<ul>
			{data.map((item, index) => {
				return (
					<li key={index}>
						<span>{item.name}</span>
						&nbsp;
						<span>{item.age}</span>
					</li>
				);
			})}
		</ul>
	);
}

const data = [ { name: 'Daniel', age: 25 }, { name: 'John', age: 24 }, { name: 'Jen', age: 31 } ];

ReactDOM.render(<List data={data} />, document.getElementById('root'));
