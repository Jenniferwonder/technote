// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { forwardRef, useRef } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});

const AnotherInput = forwardRef(({ value, onChange }, ref) => {
	return <input value={value} onChange={onChange} ref={ref} />;
});

export default function ForwardRef() {
	const inputRef = useRef(null);
	const anotherInputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}
	function handleAnotherClick() {
		anotherInputRef.current.focus();
	}

	return (
		<>
			<h2>Forward Ref</h2>
			<MyInput ref={inputRef} />
			<AnotherInput ref={anotherInputRef} />
			<div>
				<button onClick={handleClick}>Focus the input</button>
				<button onClick={handleAnotherClick}>Focus another input</button>
			</div>
		</>
	);
}
