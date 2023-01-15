import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import ProductView from './productview/ProductView';

const SearchResultsPage = ({searchresults}) => {
	return (
		<>
			<div className='product-view'>
				{
					searchresults?.length > 0 
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

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact />
				</Routes>
			</Router>
		</>
	);
}

export default App;
