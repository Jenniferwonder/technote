// ref: https://react.dev/reference/react/useRef
// Done-20240320 Good
import { useRef } from "react";

export default function InputRef() {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<>
			<h2>Input Ref</h2>
			<input ref={inputRef} />
			<button onClick={handleClick}>Focus the input</button>
		</>
	);
}
