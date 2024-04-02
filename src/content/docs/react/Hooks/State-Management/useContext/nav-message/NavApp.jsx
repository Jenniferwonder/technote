// Reference: https://www.ruanyifeng.com/blog/2019/09/react-hooks.html

import { AppContext } from "./Context";
import { Nav } from "./Nav";
import { Messages } from "./Messages";

export default function NavApp() {
	return (
		<>
			<h2>Nav App</h2>
			<AppContext.Provider
				value={{
					username: "superawesome",
				}}
			>
				<div className="App">
					<Nav />
					<Messages />
				</div>
			</AppContext.Provider>
		</>
	);
}
