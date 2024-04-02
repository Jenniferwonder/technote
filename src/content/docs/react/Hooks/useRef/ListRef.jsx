// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { useRef } from "react";

export default function ListRef() {
	const listRef = useRef(null);

	function scrollToIndex(index) {
		const listNode = listRef.current;
		// This line assumes a particular DOM structure:
		const imgNode = listNode.querySelectorAll("li > img")[index];
		imgNode.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	}

	return (
		<>
			<h2> List Ref (Scroll to view) </h2>
			<nav>
				<button onClick={() => scrollToIndex(0)}>Tom</button>
				<button onClick={() => scrollToIndex(1)}>Maru</button>
				<button onClick={() => scrollToIndex(2)}>Jellylorum</button>
			</nav>
			<div>
				<ul ref={listRef}>
					<li>
						<img src="https://i.imgur.com/Mx7dA2Y.jpg" alt="Tom" />
					</li>
					<li>
						<img src="https://i.imgur.com/ZF6s192m.jpg" alt="Maru" />
					</li>
					<li>
						<img src="https://i.imgur.com/aTtVpES.jpg" alt="Jellylorum" />
					</li>
				</ul>
			</div>
		</>
	);
}
