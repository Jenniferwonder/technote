// Updating the screen
import { useState } from "react";

export default function UpdateClick() {
	return (
		<>
			<h2>Update Click</h2>
			<Click />
			<Click />
		</>
	);
}

function Click() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return <button onClick={handleClick}>Clicked {count} times</button>;
}
