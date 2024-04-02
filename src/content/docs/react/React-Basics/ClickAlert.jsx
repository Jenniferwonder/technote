// Responding to events
export default function ClickAlert() {
	function handleClick() {
		alert("You clicked me!");
	}

	return (
		<>
			<h2>Click to alert</h2>
			<button onClick={handleClick}>Click me</button>
		</>
	);
}
