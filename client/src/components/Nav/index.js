import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<div className="navBar">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Product">Product</Link>
					</li>
					<li>
						<Link to="/Gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li className="login">
					{Auth.loggedIn() ? (<div className="login" onClick={logout}>Logout</div>) : (<Link className="login" to="/login">Login/Sign-up</Link>)}
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;