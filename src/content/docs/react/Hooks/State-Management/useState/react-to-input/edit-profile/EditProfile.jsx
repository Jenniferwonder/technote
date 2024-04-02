import "./styles.css";
import { useState } from "react";

export default function EditProfile() {
	const [isEdit, setIsEdit] = useState(false);
	const [firstName, setFirstName] = useState("Jane");
	const [lastName, setLastName] = useState("Jacobs");
	// let finalText = "Hello, " + {firstName} + !";
	// let btnText = "Edit Profile";
	// let nameDisplay = { display: "" };
	// let inputDisplay = { display: "none" };
	// if (isEdit) {
	// 	btnText = "Save Profile";
	// 	inputDisplay = { display: "" };
	// 	nameDisplay = { display: "none" };
	// }

	const nameDisplay = isEdit ? { display: "none" } : { display: "" };
	const inputDisplay = isEdit ? { display: "" } : { display: "none" };

	function handleClick(e) {
		e.preventDefault();
		setIsEdit(!isEdit);
	}

	return (
		<>
			<h2>Edit Profile</h2>
			<form onSubmit={handleClick}>
				<label>
					First name: <b style={nameDisplay}>{firstName}</b>
					<input
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
						style={inputDisplay}
					/>
				</label>
				<label>
					Last name: <b style={nameDisplay}>{lastName}</b>
					<input
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
						style={inputDisplay}
					/>
				</label>
				<button type="submit">
					{isEdit ? "Save Profile" : "Edit Profile"}
				</button>
				{/* <button type="submit">{btnText}</button> */}
				<p>
					{/* <i>Hello, Jane Jacobs!</i> */}
					<i>
						Hello, {firstName} {lastName}!
					</i>
				</p>
			</form>
		</>
	);
}
