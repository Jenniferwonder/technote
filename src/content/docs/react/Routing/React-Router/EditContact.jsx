import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "./contacts";

// wire up an action to the route. The form will post to the action and the data will be automatically revalidated
export default function EditContact() {
	const { contact } = useLoaderData();
	const navigate = useNavigate();
	return (
		<Form method="post" id="contact-form">
			<p>
				<span>Name</span>
				<input
					placeholder="First"
					aria-label="First name"
					type="text"
					name="first"
					defaultValue={contact.first}
					className="dark:text-black"
				/>
				<input
					placeholder="Last"
					aria-label="Last name"
					type="text"
					name="last"
					defaultValue={contact.last}
					className="dark:text-black"
				/>
			</p>
			<label>
				<span>Twitter</span>
				<input
					type="text"
					name="twitter"
					placeholder="@jack"
					defaultValue={contact.twitter}
					className="dark:text-black"
				/>
			</label>
			<label>
				<span>Avatar URL</span>
				<input
					placeholder="https://example.com/avatar.jpg"
					aria-label="Avatar URL"
					type="text"
					name="avatar"
					defaultValue={contact.avatar}
					className="dark:text-black"
				/>
			</label>
			<label>
				<span>Notes</span>
				<textarea name="notes" defaultValue={contact.notes} rows={6} />
			</label>
			<p>
				<button type="submit">Save</button>
				<button
					type="button"
					onClick={() => {
						navigate(-1);
					}}
				>
					Cancel
				</button>
			</p>
		</Form>
	);
}

export async function action({ request, params }) {
	const formData = await request.formData();
	// to transform a list of key-value pairs (as arrays) into an object
	const updates = Object.fromEntries(formData);
	await updateContact(params.contactId, updates);
	return redirect(`/learn-react/router-dom/contacts/${params.contactId}`);
}
