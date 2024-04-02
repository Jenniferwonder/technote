// Make component pure by passing guest as a prop instead
// Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure
export default function PureFun() {
	let cups = [];
	for (let i = 4; i <= 6; i++) {
		cups.push(<Cup key={i} guest={i} />);
	}
	return (
		<>
			<h2>Pure Component</h2>
			<Cup guest={1} />
			<Cup guest={2} />
			<Cup guest={3} />
			{cups}
		</>
	);
}

function Cup({ guest }) {
	return <p>Tea cup for guest #{guest}</p>;
}
