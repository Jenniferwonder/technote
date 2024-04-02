import { useState } from "react";

export default function Quiz() {
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(null);
	const [status, setStatus] = useState("empty");

	if (status === "success") {
		return <h1>That's right!</h1>;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("submitting");
		try {
			await submitForm(answer);
			setStatus("success");
		} catch (err) {
			setStatus("typing");
			setError(err);
		}
	}

	function handleTextareaChange(e) {
		e.target.value ? setStatus("typing") : setStatus("empty");
		setAnswer(e.target.value);
	}
	return (
		<>
			<h2>City quiz</h2>
			<p>
				In which city is there a billboard that turns air into drinkable water?
			</p>
			<form onSubmit={handleSubmit}>
				<textarea
					value={answer}
					onChange={handleTextareaChange}
					disabled={status === "submitting"}
				/>
				<br />
				<button disabled={status === "empty" || status === "submitting"}>
					Submit
				</button>
				{error !== null && <p style={{ color: "red" }}>{error.message}</p>}
			</form>
		</>
	);
}

function submitForm(answer) {
	// Pretend it's hitting the network.
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let shouldError = answer.toLowerCase() !== "lima";
			if (shouldError) {
				reject(new Error("Good guess but a wrong answer. Try again!"));
			} else {
				resolve();
			}
		}, 1500);
	});
}

// Static version
/* export default function Quiz({
	// Try 'submitting', 'error', 'success':
	status = "empty",
}) {

	if (status === "success") {
		return <h1>That's right!</h1>;
	}

	return (
		<>
			<h2>City quiz</h2>
			<p>
				In which city is there a billboard that turns air into drinkable water?
			</p>
			<form>
				<textarea disabled={status === "submitting"} />
				<br />
				<button disabled={status === "empty" || status === "submitting"}>
					Submit
				</button>
				{status === "error" && (
					<p className="Error">Good guess but a wrong answer. Try again!' </p>)} */
