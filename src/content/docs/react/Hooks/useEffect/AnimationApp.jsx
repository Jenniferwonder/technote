// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
import { useState, useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation.js";

export default function AnimationApp() {
	const [show, setShow] = useState(false);
	return (
		<>
			<h2>Animation App</h2>
			<button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
			{/* <hr /> */}
			{show && <Welcome />}
		</>
	);
}
function Welcome() {
	const ref = useRef(null);

	useEffect(() => {
		const animation = new FadeInAnimation(ref.current);
		animation.start(1000);
		return () => {
			animation.stop();
		};
	}, []);

	return (
		<h1
			ref={ref}
			style={{
				opacity: 0,
				color: "white",
				padding: 50,
				textAlign: "center",
				fontSize: 50,
				backgroundImage:
					"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
			}}
		>
			Welcome
		</h1>
	);
}
