// import "./style.css";
import { useEffect } from "react";
import {
	Form,
	useLoaderData,
	useSubmit,
	useNavigation,
} from "react-router-dom";
export default function Navbar() {
	const { contacts, q } = useLoaderData();
	const submit = useSubmit();
	const navigation = useNavigation();
	const searching =
		navigation.location &&
		new URLSearchParams(navigation.location.search).has("q");
	useEffect(() => {
		document.getElementById("q").value = q;
	}, [q]);
	return (
		<div className="navbar">
			<Form id="search-form" role="search">
				<input
					id="q"
					aria-label="Search contacts"
					placeholder="Search"
					type="search"
					name="q"
					defaultValue={q}
					className={
						searching
							? "pl-3 h-8 m-2 h-10 rounded-md dark:text-black loading"
							: "pl-3 h-8 m-2 h-10 rounded-md dark:text-black"
					}
					onChange={(event) => {
						const isFirstSearch = q == null;
						submit(event.currentTarget.form, {
							replace: !isFirstSearch,
						});
					}}
				/>
				<div id="search-spinner" aria-hidden hidden={!searching} />
				<div className="sr-only" aria-live="polite"></div>
			</Form>
			<Form method="post">
				<button type="submit">New</button>
			</Form>
		</div>
	);
}
