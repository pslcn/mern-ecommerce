import React, { useState, } from 'react';

import Product from './Product'

const ProductView = ({ productData, maxNumShow }) => {
	const [loadedData, setLoadedData] = useState(['Loading']);
	
	productData.then((productData) => {
		setLoadedData(productData);
	});

	return (
		<>
			<div className='product-view'>
				{
					loadedData[0] === 'Loading'
						? (
							<h2>Loading results...</h2>
						) : (	
							loadedData.length > 0
								? (
									loadedData.slice(0, maxNumShow).map((product) => (<Product key={ product.productid } props={ product } />)) 
								) : (
									<h2>No products matched the query</h2>
								)
						)
				}
			</div>
		</>
	)
}

export default ProductView;
