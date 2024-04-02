// Same component at the same position preserves state
// In this example, there are two different <Counter /> tags
// It’s the same component at the same position, so from React’s perspective, it’s the same counter.
// Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React!

import { useState } from "react";

export default function FancyCounter() {
	const [isFancy, setIsFancy] = useState(false);
	return (
		<div>
			<h2>Fancy Counter</h2>
			{isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
			<label>
				<input
					type="checkbox"
					checked={isFancy}
					onChange={(e) => {
						setIsFancy(e.target.checked);
					}}
				/>
				Use fancy styling
			</label>
		</div>
	);
}

function Counter({ isFancy }) {
	const [score, setScore] = useState(0);
	const [hover, setHover] = useState(false);

	let className = "counter";
	if (hover) {
		className += " hover";
	}
	if (isFancy) {
		className += " fancy";
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
