import React from "react";
import Nav from "../Nav";

function Header() {

	return (
		<header id="headerLogo">
			<h1 className="title">Code 3 Graphix<span>&trade;</span></h1>
			<Nav/>
		</header>
	);
}

export default Header;

/*import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Nav from "../Nav";

function Header() {
	const { loading, data } = useQuery(QUERY_ME);
	const username = data?.me.username || [];

	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<div className="headerContainer" >
			<header className="center" id="headerLogo">
				<div className="loginNav">
					<div>
						{Auth.loggedIn() ? (
						<h4>Welcome, {loading ? "" : username}</h4>
						) : (
						<h5>Welcome,</h5>
						)}
					</div>
					<div>
						{Auth.loggedIn() ? (<div className="login" onClick={logout}>Logout</div>) : (<Link className="login" to="/login">Login/Sign-up</Link>)}
					</div>
				</div>
				<h1 className="title">Code 3 Graphix</h1>
				<Nav/>
			</header>
		</div>
	);
}

export default Header;*/