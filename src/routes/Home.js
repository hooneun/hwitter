import React, { useState } from 'react';

const Home = () => {
	const [ hwitt, setHwitt ] = useState('');
	const onSubmit = (event) => {
		event.preventDefault();
	};
	const onChange = (event) => {
		const { target: { value } } = event;
		setHwitt(value);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={hwitt}
					onChange={onChange}
					placeholder="What's on your mind?"
					maxLength={12}
				/>
				<input type="submit" value="hwitt" />
			</form>
		</div>
	);
};

export default Home;
