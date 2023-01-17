import React from 'react';

import Product from './Product'

const ProductView = ({productdata}) => {
	return (
		<>
			<div className='product-view'>
				{productdata.map((product) => (
					<Product props={product} />
				))}
			</div>
		</>
	)
}

export default ProductView;
