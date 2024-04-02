// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
// ❌Writing data fetching directly in Effects gets repetitive and makes it difficult to add optimizations like caching and server rendering later
import { useState, useEffect } from "react";

export default function FetchBio() {
	const [person, setPerson] = useState("Alice");
	const [bio, setBio] = useState(null);
	useEffect(() => {
		let ignore = false;
		setBio(null);
		fetchBio(person).then((result) => {
			if (!ignore) {
				setBio(result);
			}
		});
		return () => {
			ignore = true;
		};
	}, [person]);

	return (
		<>
			<h2>Fetch Bio</h2>
			<select
				value={person}
				onChange={(e) => {
					setPerson(e.target.value);
				}}
			>
				<option value="Alice">Alice</option>
				<option value="Bob">Bob</option>
				<option value="Taylor">Taylor</option>
			</select>
			<hr />
			<p>
				<i>{bio ?? "Loading..."}</i>
			</p>
		</>
	);
}

async function fetchBio(person) {
	const delay = person === "Bob" ? 2000 : 200;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("This is " + person + "’s bio.");
		}, delay);
	});
}
