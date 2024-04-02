const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

// <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
export default function Lists() {
	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "magenta" : "lightgreen",
			}}
		>
			{product.title}
		</li>
	));

	return (
		<>
			<h2>Lists</h2>
			<ul>{listItems}</ul>
		</>
	);
}
