import React, { useState, } from 'react';

import Product from './Product';

import './ProductView.css';

const ProductGridView = ({ productData }) => {
	const [loadedData, setLoadedData] = useState(['loading']);

	productData.then((productData) => {
		setLoadedData(productData);
	});

	return (
		<>
			{
				loadedData[0] === 'loading'
					? (
						<h2>Loading...</h2>
					) : (
						loadedData.length > 0
							? (
								loadedData.slice(0, 6).map((product) => ( 
									<Product key={ product.productid } props={ product } />
								))
							) : (
								<h2>No products were loaded...</h2>
							)
					)
			}
		</>
	)
}

export default ProductGridView;
