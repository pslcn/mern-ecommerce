import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
	return (
		<li className='nav-item'>
			<Link to={props.link} className='nav-links'>
				{props.name}
			</Link>
		</li>
	)
}

const SearchBar = ({link}) => {
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const searchProducts = async (name) => {
		const response = await fetch(``);
		const data = await response.json();
		setProducts(data.Search);
	}

	useEffect(() => {
		searchProducts(searchTerm);
		navigate({link});
	}, []);

	return (
		<div className='search-bar'>
			<input placeholder='Search for products' 
				value={searchTerm} 
				onChange={(e) => setSearchTerm(e.target.value)} 
			/>
		</div>
	)
}

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">eCommerce Platform <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></Link>	
				<SearchBar link='/results' />
				<ul className='nav-menu'>
					<NavItem name={'Home'} link={'/'} />	
					<NavItem name={'About'} link={'/'} />	
					<NavItem name={'Cart'} link={'/cart'} />	
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
