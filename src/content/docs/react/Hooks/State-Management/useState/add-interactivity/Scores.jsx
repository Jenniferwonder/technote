// Queueing a series of state updates
import { useState } from "react";

export default function Scores() {
	const [score, setScore] = useState(0);

	function increment() {
		// Replace `setScore(score + 1)`
		setScore((s) => s + 1);
	}

	return (
		<>
			<h2>Scores Updater</h2>
			<button onClick={() => increment()}>+1</button>
			<button
				onClick={() => {
					increment();
					increment();
					increment();
				}}
			>
				+3
			</button>
			<h3>Score: {score}</h3>
		</>
	);
}
