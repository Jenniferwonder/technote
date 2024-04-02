// export { default as AboutPage } from "./AboutPage";
// export { default as Conditional } from "./Conditional";
// export { default as Lists } from "./Lists";
// export { default as ClickAlert } from "./ClickAlert";
// export { default as UpdateClick } from "./UpdateClick";
// export { default as ShareClickApp } from "./ShareClickApp";
// export { default as ImpureFun } from "./ImpureFun";
// export { default as PureFun } from "./PureFun";
// 🏷️01-react-basics
import AboutPage from "./AboutPage";
import Conditional from "./Conditional";
import Lists from "./Lists";
import ClickAlert from "./ClickAlert";
import UpdateClick from "./UpdateClick";
import ShareClickApp from "./ShareClickApp";
import ImpureFun from "./ImpureFun";
import PureFun from "./PureFun";
export default function ReactBasicDemo() {
	return (
		<>
			<h1>🏷️React Basic Demo</h1>
			<AboutPage />
			<Lists />
			<ClickAlert />
			<UpdateClick />
			<ShareClickApp />
			<Conditional />
			<ImpureFun />
			<PureFun />
			<hr></hr>
		</>
	);
}
