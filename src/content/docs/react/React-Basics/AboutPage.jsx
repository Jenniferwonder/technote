const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};
export default function AboutPage() {
	return (
		<>
			<h2>About Page</h2>
			<h3>{user.name}</h3>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
			<p>
				Hello there.
				<br />
				How do you do?
			</p>
			<button>I'm a button</button>
		</>
	);
}
