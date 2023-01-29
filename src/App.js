import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductListView from './productview/ProductListView';
import ProductGridView from './productview/ProductGridView';

import './App.css';

const getSearchResults = async (searchQuery) => {
		const API_URL = 'http://localhost:8080/api';

		console.log('Search Query: ' + searchQuery);
		// const response = await fetch(`${API_URL}&s=${searchQuery}`);
		const response = await fetch(`${API_URL}`);
		const data = await response.json();

		return data.fetchedData
}

const SearchResultsPage = () => {
	const { search } = useLocation();
	const parameters = new URLSearchParams(search);

	const searchQuery = parameters.get('search_query');
	const searchResults = getSearchResults(searchQuery);
	// searchResults.then((test) => (console.log('searchResults: ' + test[0].name)));

	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
					<ProductListView productData={ searchResults } maxNumShow={6} />
				</section>
			</div>
		</>
	)
}

const HomePage = () => {
	const genericQuery = ''; // Get all products for homepage
	const searchResults = getSearchResults(genericQuery);

	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
					<ProductGridView productData={ searchResults } />
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
]);

const App = () => {
	return (
		<RouterProvider router={ router } />
	)
}

export default App;
