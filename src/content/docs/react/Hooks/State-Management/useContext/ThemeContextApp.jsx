// Ref: https://react.dev/reference/react/useContext
// Updating a value via context
// Done-20240320 Good
import { createContext, useContext, useState } from "react";
import "./style.css";

const ThemeContext = createContext(null);

export default function ThemeContextApp() {
	const [theme, setTheme] = useState("dark");
	return (
		<>
			<h2>Theme Context App</h2>
			<ThemeContext.Provider value={theme}>
				<Form />
				<label>
					<input
						type="checkbox"
						checked={theme === "light"}
						onChange={(e) => {
							setTheme(e.target.checked ? "light" : "dark");
						}}
					/>
					Use light mode
				</label>
			</ThemeContext.Provider>
		</>
	);
}

function Form({ children }) {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
		</Panel>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = "panel-" + theme;
	return (
		<section className={className}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme;
	return <button className={className}>{children}</button>;
}
