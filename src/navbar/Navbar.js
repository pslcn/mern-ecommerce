import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">eCommerce Platform <i className="fa-solid fa-cart-shopping" /></Link>	
				</div>
			</nav>
		</>
	);
}

export default Navbar;
