// 🏷️useRef
import ClickRef from "./useRef/ClickRef";
import InputRef from "./useRef/InputRef";
import ListRef from "./useRef/ListRef";
import VideoRef from "./useRef/VideoRef";
import RemoveRef from "./useRef/RemoveRef";
import ForwardRef from "./useRef/ForwardRef";
import ModalDialog from "./useRef/ModalDialog";
// 🏷️ useImperativeHandle
import CommentApp from "./useImperativeHandle/CommentApp";

export default function RefDemo() {
	return (
		<div>
			<h1>🏷️05-1-A-useRef</h1>
			<ClickRef />
			<InputRef />
			<ListRef />
			<VideoRef />
			<ForwardRef />
			<RemoveRef />
			<ModalDialog />
			<h1>🏷️05-1-B-useImperativeHandle</h1>
			<CommentApp />
		</div>
	);
}
