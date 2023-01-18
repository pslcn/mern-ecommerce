import React from 'react';
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.css';

const NavItem = (props) => {
	return (
		<>
			<li className='horiz-li'>
				<Link to={props.link}>
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
		<form onSubmit={handleSubmit} >
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
			<header className='header-container flex-container container'>
				<div className='header-text flex-item-container container'>
					<Link to="/" className="navbar-logo">eCommerce Platform <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></Link>	
				</div>			
				
				<nav className='header-nav flex-container container'>
					<div className='nav-form flex-item-container container'>
						<SearchBar link={'/results'} />
					</div>

					<div className='nav-list flex-item-container container'>
						<ul>
							<NavItem name={'Home'} link={'/'} />	
							<NavItem name={'About'} link={'/'} />	
							<NavItem name={'Cart'} link={'/cart'} />	
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
