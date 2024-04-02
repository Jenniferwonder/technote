// Different components at the same position reset state
// when you render a different component in the same position, it resets the state of its entire subtree
import { useState } from "react";

export default function PauseCounter() {
	const [isPaused, setIsPaused] = useState(false);
	return (
		<div>
			<h2>Pause Counter</h2>
			{isPaused ? <p>See you later!</p> : <Counter />}
			<label>
				<input
					type="checkbox"
					checked={isPaused}
					onChange={(e) => {
						setIsPaused(e.target.checked);
					}}
				/>
				Take a break
			</label>
		</div>
	);
}

function Counter() {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = "counter";
	if (hover) {
		className += " hover";
	}

	return (
		<div
			className={className}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}
		>
			<h3>{score}</h3>
			<button onClick={() => setScore(score + 1)}>Add one</button>
		</div>
	);
}
