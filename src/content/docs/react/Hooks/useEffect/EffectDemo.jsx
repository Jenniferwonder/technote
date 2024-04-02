// 🏷️ useEffect
import ChatRoomApp from "./useEffect/ChatRoomApp";
import GlobalEvent from "./useEffect/GlobalEvent";
import AnimationApp from "./useEffect/AnimationApp";

import VisibleElement from "./useEffect/VisibleElement";
import ChatRoomCustom from "./useEffect/ChatRoomCustom";
import MapWidgetApp from "./useEffect/MapWidgetApp";
import FetchBio from "./useEffect/FetchBio";
import StateUpdate from "./useEffect/StateUpdate";
// 🏷️ useLayoutEffect
import ToolTipButton from "./useLayoutEffect/ToolTipButton";

export default function EffectDemo() {
	return (
		<div>
			<h1>🏷️05-2-A-useEffect</h1>
			<ChatRoomApp />
			{/* <GlobalEvent /> */}
			<AnimationApp />
			<VisibleElement />
			<ChatRoomCustom />
			<MapWidgetApp />
			<FetchBio />
			{/* <StateUpdate /> */}
			<h1>🏷️05-2-B-useLayoutEffect</h1>
			{/* <ToolTipButton /> */}
		</div>
	);
}
