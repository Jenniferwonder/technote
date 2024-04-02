import { useContext } from "react";
import { AppContext } from "./Context";

export const Nav = () => {
	const { username } = useContext(AppContext);
	return (
		<div className="navbar">
			<p>AwesomeSite</p>
			<p>{username}</p>
		</div>
	);
};
