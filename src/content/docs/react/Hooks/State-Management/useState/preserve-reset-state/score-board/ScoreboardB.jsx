// Option 2: Resetting state with a key
// A more generic way to reset a component’s state.
// You can use key to make React distinguish between any components.
import "./styles.css";
import { useState } from "react";

export default function ScoreboardB() {
	const [isPlayerA, setIsPlayerA] = useState(true);
	return (
		<div>
			{isPlayerA ? (
				<Counter key="Taylor" person="Taylor" />
			) : (
				<Counter key="Sarah" person="Sarah" />
			)}
			<button
				onClick={() => {
					setIsPlayerA(!isPlayerA);
				}}
			>
				Next player!
			</button>
		</div>
	);
}

function Counter({ person }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = "counter";
	if (hover) {
		className += " hover";
	}

	return (
		<>
			<h2>Scoreboard B</h2>
			<div
				className={className}
				onPointerEnter={() => setHover(true)}
				onPointerLeave={() => setHover(false)}
			>
				<h3>
					{person}'s score: {score}
				</h3>
				<button onClick={() => setScore(score + 1)}>Add one</button>
			</div>
		</>
	);
}
