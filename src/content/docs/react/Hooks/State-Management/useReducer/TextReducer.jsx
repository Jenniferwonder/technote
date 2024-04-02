// Done-20240319 Good
// Multiple Reducers, State as an Object
import { useReducer } from "react";

const initialState = { firstName: "John", lastName: "Doe" };
export default function TextReducer() {
	const [firstName, changeFirstName] = useReducer(
		textReducer,
		initialState.firstName
	);
	const [lastName, changeLastName] = useReducer(
		textReducer,
		initialState.lastName
	);
	return (
		<>
			<h2>Text Reducer</h2>
			<TextInput
				label={"First Name: "}
				value={firstName}
				onChangeText={changeFirstName}
			/>
			<TextInput
				label={"Last Name: "}
				value={lastName}
				onChangeText={changeLastName}
			/>
			<p>
				{firstName} {lastName}
			</p>
		</>
	);
}

const TextInput = ({ label, value, onChangeText }) => (
	<div className="wrapper">
		<label>
			{label}
			<input
				type="text"
				value={value}
				onChange={(e) => onChangeText(e.target.value)}
			/>
		</label>
	</div>
);

const textReducer = (state, action) => action;
