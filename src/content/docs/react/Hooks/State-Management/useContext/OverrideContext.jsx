// Ref: https://react.dev/reference/react/useContext
// Override a theme
// Done-20240320 Good
import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export default function OverrideContext() {
	return (
		<>
			<h2>Override Context</h2>
			<ThemeContext.Provider value="dark">
				<Form />
			</ThemeContext.Provider>
		</>
	);
}

function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
			<ThemeContext.Provider value="light">
				<Footer />
			</ThemeContext.Provider>
		</Panel>
	);
}

function Footer() {
	return (
		<footer>
			<Button>Settings</Button>
		</footer>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = "panel-" + theme;
	return (
		<section className={className}>
			{title && <h3>{title}</h3>}
			{children}
		</section>
	);
}

function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme;
	return <button className={className}>{children}</button>;
}
