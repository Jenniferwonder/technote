import { useState } from "react";
import "./styles.css";

export default function RemoveBg() {
	const [isClick, setIsClick] = useState(false);

	let bgClassName = "background background--active";
	let picClassName = "picture";

	if (isClick) {
		bgClassName = "background";
		picClassName += " picture--active";
		// console.log("3");
	}
	return (
		<>
			<h2>Click to Remove Background</h2>
			<div
				className={bgClassName}
				onClick={() => {
					setIsClick(false);
				}}
			>
				<img
					className={picClassName}
					alt="Rainbow houses in Kampung Pelangi, Indonesia"
					src="https://i.imgur.com/5qwVYb1.jpeg"
					onClick={(e) => {
						e.stopPropagation();
						setIsClick(true);
					}}
				/>
			</div>
		</>
	);
}
