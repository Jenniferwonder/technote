// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
import { useState } from "react";
import { useRef, useEffect } from "react";
import { MapWidget } from "./map-widget.js";

export default function MapWidgetApp() {
	const [zoomLevel, setZoomLevel] = useState(0);
	return (
		<>
			<h2>Map Widget</h2>
			Zoom level: {zoomLevel}x
			<button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
			<button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
			<hr />
			<Map zoomLevel={zoomLevel} />
		</>
	);
}

function Map({ zoomLevel }) {
	const containerRef = useRef(null);
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current === null) {
			mapRef.current = new MapWidget(containerRef.current);
		}

		const map = mapRef.current;
		map.setZoom(zoomLevel);
	}, [zoomLevel]);

	return <div style={{ width: 200, height: 200 }} ref={containerRef} />;
}
