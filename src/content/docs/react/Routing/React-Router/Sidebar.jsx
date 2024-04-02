// import "./style.css";
import { useLoaderData, NavLink } from "react-router-dom";
// import {} from "./contacts";

export default function Sidebar() {
	const { contacts } = useLoaderData();
	return (
		<div id="sidebar">
			<nav>
				{contacts.length ? (
					<ul>
						{contacts.map((contact) => (
							<li key={contact.id}>
								<NavLink
									to={`contacts/${contact.id}`}
									className={({ isActive, isPending }) =>
										isActive ? "active" : isPending ? "pending" : ""
									}
								>
									{contact.first || contact.last ? (
										<>
											{contact.first} {contact.last}
										</>
									) : (
										<i>No Name</i>
									)}{" "}
									{contact.favorite && <span>★</span>}
								</NavLink>
							</li>
						))}
					</ul>
				) : (
					<p>
						<i>No contacts</i>
					</p>
				)}
				{/* <ul>
					<li>
						<a href={`/contacts/1`}>Your Name</a>
						<Link to={`/contacts/1`}>Your Name</Link>
					</li>
					<li>
						<a href={`/contacts/2`}>Your Friend</a>
						<Link to={`/contacts/2`}>Your Friend</Link>
					</li>
				</ul> */}
			</nav>
			<h3>React Router Contacts</h3>
		</div>
	);
}
