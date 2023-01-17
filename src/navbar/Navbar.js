import React from 'react';
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.css';

const NavItem = (props) => {
	return (
		<>
			<li className='nav-listitem'>
				<Link to={props.link} className='nav-links'>
					{props.name}
				</Link>
			</li>
		</>
	)
}

const SearchBar = ({link}) => {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const navigate = useNavigate();

	const searchProducts = async (productname) => {
		setProducts();
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		searchProducts(searchTerm);
		navigate(link);
	}

	return (
		<form className='search-bar' onSubmit={handleSubmit} >
			<input type='text' placeholder='Search for products' 
				value={searchTerm} 
				onChange={(e) => setSearchTerm(e.target.value)} 
			/>
		</form>
	)
}

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<ul>
						<div className="nav-logosection">
							<Link to="/" className="navbar-logo">eCommerce Platform <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></Link>	
							<SearchBar link={'/results'} />
						</div>
						
						<div className="nav-menu">
							<NavItem name={'Home'} link={'/'} />	
							<NavItem name={'About'} link={'/'} />	
							<NavItem name={'Cart'} link={'/cart'} />	
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
