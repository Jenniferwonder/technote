// 🏷️04-useReducer

import TaskApp from "./TaskApp/TaskApp";
import CountReducerApp from "./CountReducerApp";
import DualCount from "./DualCount";
import TextReducer from "./TextReducer";

export default function ReducerDemo() {
	return (
		<div>
			<h1>🏷️04-2-useReducer</h1>
			<TaskApp />
			<CountReducerApp />
			<DualCount />
			<TextReducer />
			<hr></hr>
		</div>
	);
}
