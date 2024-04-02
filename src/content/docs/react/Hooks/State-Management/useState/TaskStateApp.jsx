// Done-20240319 Good
import { useState } from "react";
import { initialTasks } from "../useReducer/TaskApp/taskData";
export default function TaskStateApp() {
	const [tasks, setTasks] = useState(initialTasks);

	function handleAdd(newDetail) {
		setTasks([...tasks, { id: tasks.length, detail: newDetail, done: false }]);
	}
	function handleChange(task) {
		setTasks(
			tasks.map((t) => {
				if (t.id === task.id) {
					return task;
				} else {
					return t;
				}
			})
		);
	}
	function handleDelete(task) {
		setTasks(tasks.filter((t) => t.id !== task.id));
	}
	return (
		<div>
			<h2>TaskState App</h2>
			<AddTask onAddTask={handleAdd} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChange}
				onDeleteTask={handleDelete}
			/>
		</div>
	);
}

function AddTask({ onAddTask }) {
	const [newDetail, setNewDetail] = useState("");
	return (
		<div>
			<input
				placeholder="Add task"
				value={newDetail}
				onChange={(e) => setNewDetail(e.target.value)}
			/>
			<button
				onClick={() => {
					onAddTask(newDetail);
					setNewDetail("");
				}}
			>
				Add
			</button>
		</div>
	);
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	return (
		<ul>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDeleteTask}
					onChange={onChangeTask}
				/>
			))}
		</ul>
	);
}

function Task({ task, onDelete, onChange }) {
	const [isEditting, setIsEditting] = useState(false);
	return (
		<li key={task.id}>
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => onChange({ ...task, done: e.target.checked })}
			/>
			{isEditting ? (
				<input
					value={task.detail}
					onChange={(e) => {
						onChange({ ...task, detail: e.target.value });
					}}
				/>
			) : (
				task.detail
			)}
			<button onClick={() => setIsEditting(!isEditting)}>
				{isEditting ? "Save" : "Edit"}
			</button>
			<button onClick={() => onDelete(task)}>Delete</button>
		</li>
	);
}
