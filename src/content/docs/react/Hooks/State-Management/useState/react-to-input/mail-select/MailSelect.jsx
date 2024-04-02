import { useState } from "react";
import { letters } from "./data.jsx";
import Letter from "./Letter.jsx";
import "./styles.css";

export default function MailSelect() {
	// const [selectedId, setSelectedId] = useState(null);
	const [selectedIds, setSelectedIds] = useState([]);

	//First Version ---------------------------------
	// const [newLetters, setNewLetters] = useState(
	// 	letters.map((letter) => {
	// 		return {
	// 			...letter,
	// 			isSelected: false,
	// 		};
	// 	})
	// );
	// const selectedLetters = newLetters.filter((letter) => letter.isSelected);

	// TODO: allow multiple selection
	// const selectedCount = 1;
	const selectedCount = selectedIds.length;

	//First Version ---------------------------------
	// const selectedCount = selectedLetters.length;

	function handleToggle(toggledId) {
		// TODO: allow multiple selection
		// setSelectedId(toggledId);
		if (selectedIds.includes(toggledId)) {
			setSelectedIds(selectedIds.filter((id) => id !== toggledId));
		} else {
			setSelectedIds([...selectedIds, toggledId]);
		}

		//First Version ---------------------------------
		// setNewLetters(
		// 	newLetters.map((letter) => {
		// 		if (letter.id === toggledId) {
		// 			return {
		// 				...letter,
		// 				isSelected: !letter.isSelected,
		// 			};
		// 		} else {
		// 			return letter;
		// 		}
		// 	})
		// );

		//Failed Version ----------------------
		// let selectedLetter = letters.find((letter) => letter.id === toggledId);
		// if (selectedLetters.includes(selectedLetter)) {
		// 	selectedLetter.isSelected = false;
		// 	setSelectedLetters(
		// 		selectedLetters.filter((letter) => (letter.isSelected = true))
		// 	);
		// } else {
		// 	setSelectedLetters([...selectedLetters, selectedLetter]);
		// 	selectedLetter.isSelected = true;
		// }
	}

	return (
		<>
			<h2>Mail Select</h2>
			<h3>Inbox</h3>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isSelected={
							// TODO: allow multiple selection
							// letter.id === selectedId
							selectedIds.includes(letter.id)

							//First Version ---------------------------------
							//letter.isSelected
						}
						onToggle={handleToggle}
					/>
				))}
				{/* <hr /> */}
				<p>
					<b>You selected {selectedCount} letters</b>
				</p>
			</ul>
		</>
	);
}
