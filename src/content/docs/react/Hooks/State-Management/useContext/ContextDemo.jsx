// 🏷️useContext
import NavApp from "./nav-message/NavApp";
import HeadingApp from "./heading-context/HeadingApp";
import PostApp from "./post-context/PostApp";
import ThemeContextApp from "./ThemeContextApp";
import CurrentUser from "./CurrentUser";
import MultiContext from "./MultiContext";
import ExtractContext from "./ExtractContext";
import OverrideContext from "./OverrideContext";
export default function ContextDemo() {
	return (
		<div>
			<h1>🏷️04-3-useContext</h1>
			<HeadingApp />
			<PostApp />
			<NavApp />
			<ThemeContextApp />
			<CurrentUser />
			<MultiContext />
			<ExtractContext />
			<OverrideContext />
			<hr></hr>
		</div>
	);
}
