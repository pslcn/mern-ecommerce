import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductListView from './productview/ProductListView';
import ProductGridView from './productview/ProductGridView';

import './App.css';

const getSearchResults = async (searchQuery=false) => {
		const API_URL = 'http://localhost:8080/api';

		let response;
		if (!searchQuery) {
			response = await fetch(`${API_URL}`);
		} else {
			response = await fetch(`${API_URL}?searchQuery=${searchQuery}`);
		}
		const data = await response.json();

		return data.fetchedData
}

let basket = [];
function handleBasketChange (props) {
	for (let p = 0; p < basket.length; p++) {
		if (basket[p].item.productid === props.productid) {
			basket[p].item.quantity += 1;
			return;
		}
	}

	props.quantity = 1;
	basket.push({ item: props, });
}

const SearchResultsPage = () => {
	const { search } = useLocation();
	const parameters = new URLSearchParams(search);

	const searchQuery = parameters.get('search_query');
	const searchResults = getSearchResults(searchQuery);

	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
					<ProductListView productData={ searchResults } maxNumShow={ 6 } onBasketChange={ handleBasketChange } />
				</section>
			</div>
		</>
	)
}

const HomePage = () => {
	const searchResults = getSearchResults();

	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
					<ProductGridView productData={ searchResults } onBasketChange={ handleBasketChange } />
				</section>
			</div>
		</>
	)
}

const CheckoutPage = () => {
	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
					<ProductListView productData={ Promise.resolve(basket) } onBasketChange={ handleBasketChange } />
				</section>
			</div>
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: (<HomePage />),
	},
	{
		path: '/results',
		element: (<SearchResultsPage />),
	},
	{
		path: '/cart',
		element: (<CheckoutPage />),
	},
]);

const App = () => {
	return (
		<RouterProvider router={ router } />
	)
}

export default App;
