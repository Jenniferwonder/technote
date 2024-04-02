import Heading from "./Heading.jsx";
import Section from "./Section.jsx";
import "./styles.css";

export default function HeadingApp() {
	return (
		<>
			<h2>Heading App</h2>
			<Section>
				<Heading>Title</Heading>
				<Section>
					<Heading>Heading</Heading>
					<Heading>Heading</Heading>
					<Heading>Heading</Heading>
					<Section>
						<Heading>Sub-heading</Heading>
						<Heading>Sub-heading</Heading>
						<Heading>Sub-heading</Heading>
						<Section>
							<Heading>Sub-sub-heading</Heading>
							<Heading>Sub-sub-heading</Heading>
							<Heading>Sub-sub-heading</Heading>
						</Section>
					</Section>
				</Section>
			</Section>
		</>
	);
}

// export default function Page() {
// 	return (
// 		<Section level={1}>
// 			<Heading>Title</Heading>
// 			<Section level={2}>
// 				<Heading>Heading</Heading>
// 				<Heading>Heading</Heading>
// 				<Heading>Heading</Heading>
// 				<Section level={3}>
// 					<Heading>Sub-heading</Heading>
// 					<Heading>Sub-heading</Heading>
// 					<Heading>Sub-heading</Heading>
// 					<Section level={4}>
// 						<Heading>Sub-sub-heading</Heading>
// 						<Heading>Sub-sub-heading</Heading>
// 						<Heading>Sub-sub-heading</Heading>
// 					</Section>
// 				</Section>
// 			</Section>
// 		</Section>
// 	);
// }

// export default function Page() {
// 	return (
// 		<Section>
// 			<Heading level={1}>Title</Heading>
// 			<Section>
// 				<Heading level={2}>Heading</Heading>
// 				<Heading level={2}>Heading</Heading>
// 				<Heading level={2}>Heading</Heading>
// 				<Section>
// 					<Heading level={3}>Sub-heading</Heading>
// 					<Heading level={3}>Sub-heading</Heading>
// 					<Heading level={3}>Sub-heading</Heading>
// 					<Section>
// 						<Heading level={4}>Sub-sub-heading</Heading>
// 						<Heading level={4}>Sub-sub-heading</Heading>
// 						<Heading level={4}>Sub-sub-heading</Heading>
// 					</Section>
// 				</Section>
// 			</Section>
// 		</Section>
// 	);
// }
