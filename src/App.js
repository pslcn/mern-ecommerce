import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductListView from './productview/ProductView';

import './App.css';

const SearchResultsPage = () => {
	const { search } = useLocation();
	const parameters = new URLSearchParams(search);

	const API_URL = 'http://localhost:8080/api';
	const getSearchResults = async (searchQuery) => {
		console.log('Search Query: ' + searchQuery);
		// const response = await fetch(`${API_URL}&s=${searchQuery}`);
		const response = await fetch(`${API_URL}`);
		const data = await response.json();

		return data.fetchedData
	}

	const searchQuery = parameters.get('search_query');

	const searchResults = getSearchResults(searchQuery);
	// searchResults.then((test) => (console.log('searchResults: ' + test[0].name)));

	return (
		<>
			<Navbar />
			<ProductListView productData={ searchResults } maxNumShow={6} />
		</>
	)
}

const HomePage = () => {
	return (
		<>
			<Navbar />
			<div className='content-container container'>
				<section className='content-section'>
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
