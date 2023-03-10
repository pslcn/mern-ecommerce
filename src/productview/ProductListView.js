import React, { useState, } from 'react';

import Product from './Product';

import './ProductView.css';

const ProductListView = ({ productData, maxNumShow, onBasketChange }) => {
	const [loadedData, setLoadedData] = useState(['Loading']);
	
	productData.then((productData) => {
		setLoadedData(productData);
		console.log(productData);
	});

	return (
		<>
			{
				loadedData[0] === 'Loading'
					? (
						<h2>Loading results...</h2>
					) : (	
						loadedData.length > 0
							? (
								loadedData.slice(0, maxNumShow).map((product) => (
									<Product key={ product.item.productid } props={ product.item } onBasketChange={ onBasketChange } />
								)) 
							) : (
								<h2>No products matched the query</h2>
							)
					)
			}
		</>
	)
}

export default ProductListView;
