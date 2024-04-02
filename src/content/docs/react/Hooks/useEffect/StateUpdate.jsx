// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
import { useState, useEffect } from "react";

// ✅ use an updater function to update the state in useEffect
export default function StateUpdate() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((c) => c + 1); // ✅ Pass a state updater
		}, 1000);
		return () => clearInterval(intervalId);
	}, []); // ✅ Now count is not a dependency

	return (
		<>
			<h2>State Update</h2>
			<h3>{count}</h3>
		</>
	);
}

// ❌ Don't do setCount(count+1) in useEffect
/* function WrongUpdate() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount(count + 1); // You want to increment the counter every second...
		}, 1000);
		return () => clearInterval(intervalId);
	}, [count]); // 🚩 ... but specifying `count` as a dependency always resets the interval.
	// ...
} */
