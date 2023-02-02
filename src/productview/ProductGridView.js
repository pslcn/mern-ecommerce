import React, { useState, } from 'react';

import Product from './Product';

import './ProductView.css';
import './ProductGridView.css';

const ProductGridView = ({ productData }) => {
	const [loadedData, setLoadedData] = useState(['loading']);

	const numCols = 3;
	const numRows = 3;

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
								<div className='grid-container'>
									{loadedData.slice(0, numCols * numRows).map((product) => (
										<div className='grid-item'>
											<Product key={ product.item.productid } props={ product.item } />
										</div>
									))}
								</div>
							) : (
								<h2>No products were loaded...</h2>
							)
					)
			}
		</>
	)
}

export default ProductGridView;
