// ref: https://react.dev/reference/react/useMemo
// Skipping re-rendering with useMemo and memo
// Done-2024-03-21 Good
import { useState, useMemo, memo } from "react";
import "./style.css";

const todos = createTodos();

export default function MemoToDo() {
	const [tab, setTab] = useState("all");
	const [isDark, setIsDark] = useState(true);
	return (
		<>
			<h2>Memo ToDo List </h2>
			<button onClick={() => setTab("all")}>All</button>
			<button onClick={() => setTab("active")}>Active</button>
			<button onClick={() => setTab("completed")}>Completed</button>
			<br />
			<label>
				<input
					type="checkbox"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
				/>
				Dark mode
			</label>
			<hr />
			<TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
		</>
	);
}

function TodoList({ todos, theme, tab }) {
	const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
	return (
		<div className={`todolist ${theme}`}>
			<p>
				<b>
					Note: <code>List</code> is artificially slowed down!
				</b>
			</p>
			<List items={visibleTodos} />
		</div>
	);
}

const List = memo(function List({ items }) {
	console.log(
		"[ARTIFICIALLY SLOW] Rendering <List /> with " + items.length + " items"
	);
	let startTime = performance.now();
	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms to emulate extremely slow code
	}

	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.completed ? <s>{item.text}</s> : item.text}</li>
			))}
		</ul>
	);
});

export function createTodos() {
	const todos = [];
	for (let i = 0; i < 50; i++) {
		todos.push({
			id: i,
			text: "Todo " + (i + 1),
			completed: Math.random() > 0.5, // 一个条件表达式，它会生成一个随机数，然后检查这个随机数是否大于 0.5；其中 true 和 false 的概率约为一半
		});
	}
	return todos;
}

export function filterTodos(todos, tab) {
	return todos.filter((todo) => {
		if (tab === "all") {
			return true;
		} else if (tab === "active") {
			return !todo.completed;
		} else if (tab === "completed") {
			return todo.completed;
		}
	});
}
