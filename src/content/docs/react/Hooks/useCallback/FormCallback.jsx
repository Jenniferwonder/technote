// ref: https://react.dev/reference/react/useCallback
// Skipping re-rendering with useCallback and memo
// Done-2024-03-21 Good

import { memo, useState, useCallback } from "react";

export default function FormCallback() {
	const [isDark, setIsDark] = useState(false);
	return (
		<>
			<label>
				<input
					type="checkbox"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
				/>
				Dark mode
			</label>
			<hr />
			<ProductPage
				referrerId="wizard_of_oz"
				productId={123}
				theme={isDark ? "dark" : "light"}
			/>
		</>
	);
}

function ProductPage({ productId, referrerId, theme }) {
	const handleSubmit = useCallback(
		(orderDetails) => {
			post("/product/" + productId + "/buy", {
				referrerId,
				orderDetails,
			});
		},
		[productId, referrerId]
	);

	return (
		<div className={theme}>
			<ShippingForm onSubmit={handleSubmit} />
		</div>
	);
}

function post(url, data) {
	// Imagine this sends a request...
	console.log("POST /" + url);
	console.log(data);
}

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
	const [count, setCount] = useState(1);

	console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
	let startTime = performance.now();
	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms to emulate extremely slow code
	}

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const orderDetails = {
			...Object.fromEntries(formData),
			count,
		};
		onSubmit(orderDetails);
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<b>
					Note: <code>ShippingForm</code> is artificially slowed down!
				</b>
			</p>
			<label>
				Number of items:
				<button type="button" onClick={() => setCount(count - 1)}>
					–
				</button>
				{count}
				<button type="button" onClick={() => setCount(count + 1)}>
					+
				</button>
			</label>
			<label>
				Street:
				<input name="street" />
			</label>
			<label>
				City:
				<input name="city" />
			</label>
			<label>
				Postal code:
				<input name="zipCode" />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
});

/* export default function FormCallback({ productId, referrer }) {
	const handleSubmit = useCallback(
		(orderDetails) => {
			post("/product/" + productId + "/buy", {
				referrer,
				orderDetails,
			});
		},
		[productId, referrer]
	);

	return <Form onSubmit={handleSubmit} />;
} */

/* import { useMemo } from "react";
import FormCallback from './FormCallback';

export default function Page({ productId, referrer }) {
  const handleSubmit = useMemo(() => {
    return (orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails
      });
    };
  }, [productId, referrer]);

  return <Form onSubmit={handleSubmit} />;
} */
