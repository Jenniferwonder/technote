import { useState } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";
// import "./styles.css";

export default function ChatForm() {
	const [to, setTo] = useState(contacts[0]);
	return (
		<div>
			<h2>Chat Form</h2>
			<ContactList
				contacts={contacts}
				selectedContact={to}
				onSelect={(contact) => setTo(contact)}
			/>
			<Chat key={to.id} contact={to} />
		</div>
	);
}

const contacts = [
	{ id: 0, name: "Taylor", email: "taylor@mail.com" },
	{ id: 1, name: "Alice", email: "alice@mail.com" },
	{ id: 2, name: "Bob", email: "bob@mail.com" },
];
