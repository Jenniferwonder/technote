import { useReducer } from "react";

export default function CountReducerApp() {
	const [count, dispatch] = useReducer(countReducer, 0);
	return (
		<div>
			<h2>Count Reducer App</h2>
			{count}
			<button onClick={() => dispatch("increment")}>+1</button>
			<button onClick={() => dispatch("decrement")}>-1</button>
			<button onClick={() => dispatch("reset")}>reset</button>
		</div>
	);
}

function countReducer(count, action) {
	switch (action) {
		case "increment":
			return count + 1;
		case "decrement":
			return count - 1;
		case "reset":
			return 0;
		default:
			throw new Error("Unexpected action");
	}
}
