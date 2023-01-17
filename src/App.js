import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductView from './productview/ProductView';

import './App.css';

const SearchResultsPage = ({searchresults}) => {
	return (
		<>
			<div className='product-view'>
				{
					searchresults.length > 0 
						? (
							<ProductView productdata={searchresults}/>
						) : (
							<h2>No products matched the query</h2>	
						)
				}
			</div>
		</>
	)
}

const HomePage = () => {
	return (
		<>
			<Navbar />
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
	// const [serverResponse, setServerResponse] = useState('');

	// const getServerResponse = () => {
	// 	fetch('http://localhost:9000/')
	// 		.then(res = res.text())
	// 		.then(res => {serverResponse = res})
	// 		.catch(res => err);
	// }

	return (
		<RouterProvider router={router} />
	)
}

export default App;
