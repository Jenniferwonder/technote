import { useState } from "react";
import { sculptureList } from "./artData";

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);
	const hasNext = index < sculptureList.length - 1;

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			<h2>Gallery</h2>
			<button onClick={handleNextClick}>Next</button>
			<h3>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h3>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? "Hide" : "Show"} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}
