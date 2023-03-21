import React from "react";
import Nav from "../Nav";

function Header() {

	return (
		<header className="center">
			<div>
				<h1>Header Content Here</h1>
			</div>
			<div>
				<Nav></Nav>
			</div>
		</header>
	);
}

export default Header;