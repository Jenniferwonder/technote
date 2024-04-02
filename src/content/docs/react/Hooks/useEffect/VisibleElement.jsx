// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
// the Box component uses an Effect to manage an IntersectionObserver that notifies you when the DOM element is visible in the viewport
import { useRef, useEffect } from "react";
export default function VisibleElement() {
	return (
		<>
			<h2>Visible Element</h2>
			<LongSection />
			<Box />
			{/* <LongSection /> */}
			{/* <Box />
			<LongSection /> */}
		</>
	);
}

function LongSection() {
	const items = [];
	for (let i = 0; i < 30; i++) {
		items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
	}
	return <ul>{items}</ul>;
}
function Box() {
	const ref = useRef(null);

	useEffect(() => {
		const div = ref.current;
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					// document.body.style.backgroundColor = "white";
					document.body.style.color = "lightgreen";
				} else {
					// document.body.style.backgroundColor = "black";
					document.body.style.color = "black";
				}
			},
			{
				threshold: 1.0,
			}
		);
		observer.observe(div);
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			ref={ref}
			style={{
				margin: 20,
				height: 100,
				width: 100,
				border: "2px solid black",
				backgroundColor: "blue",
			}}
		/>
	);
}
