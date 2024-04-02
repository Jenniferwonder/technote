import { useState } from "react";
import { initialLetters } from "./data.jsx";
import Letter from "./Letter.jsx";
import "./styles.css";

export default function MailHighlight() {
	const [letters, setLetters] = useState(initialLetters);
	// const [highlightedLetter, setHighlightedLetter] = useState(null);
	const [highlightedId, setHighlightedId] = useState(null);

	function handleHover(letter) {
		setHighlightedId(letter.id);
	}

	function handleStar(starred) {
		setLetters(
			letters.map((letter) => {
				if (letter.id === starred.id) {
					return {
						...letter,
						isStarred: !letter.isStarred,
					};
				} else {
					return letter;
				}
			})
		);
	}

	return (
		<>
			<h2>Mail Highlight</h2>
			<h3>Inbox</h3>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isHighlighted={letter.id === highlightedId}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
