// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
// An Effect lets you connect to the window object and listen to its events
import { useState, useEffect } from "react";

export default function GlobalEvent() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		function handleMove(e) {
			let pointerY = e.clientY;
			pointerY += window.scrollY;
			setPosition({ x: e.clientX, y: pointerY });
		}
		window.addEventListener("pointermove", handleMove);
		window.addEventListener("scroll", handleMove);
		return () => {
			window.removeEventListener("pointermove", handleMove);
			window.removeEventListener("scroll", handleMove);
		};
	}, []);

	return (
		<>
			<h2>Global Event</h2>
			<p>The Pink Pointer</p>
			<div
				style={{
					position: "absolute",
					backgroundColor: "pink",
					borderRadius: "50%",
					opacity: 0.6,
					transform: `translate(${position.x}px, ${position.y}px)`,
					pointerEvents: "none",
					left: -20,
					top: -20,
					width: 40,
					height: 40,
				}}
			/>
		</>
	);
}
