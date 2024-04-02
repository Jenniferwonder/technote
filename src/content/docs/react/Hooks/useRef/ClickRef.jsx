// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { useRef } from "react";

export default function ClickRef() {
	let ref = useRef(0);

	function handleClick() {
		ref.current = ref.current + 1;
		alert("You clicked " + ref.current + " times!");
	}

	return (
		<>
			<h2>Click Ref</h2>
			<button onClick={handleClick}>Click me!</button>
		</>
	);
}

// ❌ Pitfall
function MyComponent() {
	// ...
	// 🚩 Don't write a ref during rendering
	myRef.current = 123;
	// ...
	// 🚩 Don't read a ref during rendering
	return <h1>{myOtherRef.current}</h1>;
}
