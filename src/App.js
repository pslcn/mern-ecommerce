import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductView from './productview/ProductView';

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
	return (
		<RouterProvider router={router} />
	)
}

export default App;
