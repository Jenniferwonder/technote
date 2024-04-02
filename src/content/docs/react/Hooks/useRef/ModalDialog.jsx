// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
// import { useState, useEffect, useRef } from "react";
import { useRef } from "react";

export default function ModalDialog() {
	// const [show, setShow] = useState(false);
	const ref = useRef();
	function handleModalOpen() {
		const dialog = ref.current;
		// setShow(true);
		dialog.showModal();
	}
	function handleModalClose() {
		// setShow(false);
		const dialog = ref.current;
		dialog.close();
	}
	return (
		<>
			<h2>Modal Dialog</h2>
			{/* <button onClick={() => setShow(true)}>Open dialog</button> */}
			<button onClick={handleModalOpen}>Open dialog</button>
			<dialog ref={ref}>
				Hello there!
				<br />
				{/* <button
				onClick={() => {
					setShow(false);
				}}
			>
				Close
			</button> */}
				<button onClick={handleModalClose}>Close</button>
			</dialog>
			{/* <Dialog isOpen={show}>
				Hello there!
				<br />
				<button
					onClick={() => {
						setShow(false);
					}}
				>
					Close
				</button>
			</Dialog> */}
		</>
	);
}

/* function Dialog({ isOpen, children }) {
	useEffect(() => {
		if (!isOpen) {
			return;
		}
		const dialog = ref.current;
		dialog.showModal();
		return () => {
			dialog.close();
		};
	}, [isOpen]);

	return <dialog ref={ref}>{children}</dialog>;
} */
