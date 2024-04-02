// ref: https://react.dev/learn/keeping-components-pure
// In “Strict Mode”, React calls each component’s function twice during development to help find components that break purity rule.
let guest = 0;

function Cup() {
	// ❌ Bad: changing a preexisting variable!
	guest = guest + 1;
	return <p>Tea cup for guest #{guest}</p>;
}

export default function ImpureFun() {
	return (
		<>
			<h2>Impure Component</h2>
			<Cup />
			<Cup />
			<Cup />
		</>
	);
}
