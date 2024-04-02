// import { useState } from "react";
import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import tasksReducer from "./tasksReducer.jsx";
import "./styles.css";

export default function TaskApp() {
	// const [tasks, setTasks] = useState(initialTasks);
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	function handleAddTask(text) {
		dispatch({
			type: "added",
			id: nextId++,
			text: text,
		});
		// setTasks([
		// 	...tasks,
		// 	{
		// 		id: nextId++,
		// 		text: text,
		// 		done: false,
		// 	},
		// ]);
	}

	function handleChangeTask(task) {
		dispatch(
			// "action" object:
			{
				type: "changed",
				task: task,
			}
		);
		// setTasks(
		// 	tasks.map((t) => {
		// 		if (t.id === task.id) {
		// 			return task;
		// 		} else {
		// 			return t;
		// 		}
		// 	})
		// );
	}

	function handleDeleteTask(taskId) {
		dispatch({
			type: "deleted",
			id: taskId,
		});
		// setTasks(tasks.filter((t) => t.id !== taskId));
	}

	return (
		<>
			<h2>Task Reducer App</h2>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
}

let nextId = 3;
const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
