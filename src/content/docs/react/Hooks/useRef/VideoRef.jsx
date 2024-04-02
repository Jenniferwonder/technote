// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { useState, useRef } from "react";

export default function VideoRef() {
	const [isPlaying, setIsPlaying] = useState(false);
	const ref = useRef(null);

	function handleClick() {
		const nextIsPlaying = !isPlaying;
		setIsPlaying(nextIsPlaying);

		if (nextIsPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	}

	return (
		<>
			<h2>Video Ref</h2>
			<div>
				<button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
			</div>

			<video
				width="250"
				ref={ref}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			>
				<source
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
					type="video/mp4"
				/>
			</video>
		</>
	);
}
