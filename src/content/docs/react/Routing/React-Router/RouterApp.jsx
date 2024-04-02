import { Outlet, redirect, useNavigation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import { getContacts, createContact } from "./contacts.js";
// import { getContacts, createContact } from "./contacts.js";
// import "./style.css";

export default function RouterApp() {
	const navigation = useNavigation();
	return (
		// <Outlet />
		<div id="route-root">
			<Navbar />
			<Sidebar />
			<div
				id="detail"
				className={navigation.state === "loading" ? "loading" : ""}
			>
				<Outlet />
			</div>
		</div>
	);
}

export async function loader({ request }) {
	const url = new URL(request.url);
	const q = url.searchParams.get("q");
	const contacts = await getContacts(q);
	return { contacts, q };
}

export async function action() {
	const contact = await createContact();
	// return { contact };
	return redirect(`contacts/${contact.id}/edit`);
}
