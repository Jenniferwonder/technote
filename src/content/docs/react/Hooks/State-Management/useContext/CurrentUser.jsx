// Ref: https://react.dev/reference/react/useContext
// Updating an object via context
// lets any component below, such as LoginButton, read both currentUser and setCurrentUser, and then call setCurrentUser when needed
// Done-20240320 Good
import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function CurrentUser() {
	const [currentUser, setCurrentUser] = useState(null);
	return (
		<>
			<h2>Current User</h2>
			<CurrentUserContext.Provider
				value={{
					currentUser,
					setCurrentUser,
				}}
			>
				<Form />
			</CurrentUserContext.Provider>
		</>
	);
}

function Form({ children }) {
	return (
		<Panel title="Welcome">
			<LoginButton />
		</Panel>
	);
}

function LoginButton() {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

	if (currentUser !== null) {
		return (
			<>
				<p>You logged in as {currentUser.name}.</p>
				<Button
					onClick={() => {
						setCurrentUser(null);
					}}
				>
					Log out
				</Button>
			</>
		);
	}

	return (
		<Button
			onClick={() => {
				setCurrentUser({ name: "Advika" });
			}}
		>
			Log in as Advika
		</Button>
	);
}

function Panel({ title, children }) {
	return (
		<section className="panel">
			<h3>{title}</h3>
			{children}
		</section>
	);
}

function Button({ children, onClick }) {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}
