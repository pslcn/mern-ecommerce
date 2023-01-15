import React from 'react';
import { useState } from 'react';

const Product = ({props}) => {
	const [quantity, setQuantity] = useState(0);
	const descmaxlen = 80;

	return (
		<div className='product'>
			<h2>{props.name}</h2>
			<p>{props.desc.length > descmaxlen ? 
				props.desc.substring(0, descmaxlen - 3) + '...' : 
				props.desc
			}</p>
			<p>{props.price}</p>
			<button onClick={() => {alert('Item added to cart'); setQuantity((prevCount) => prevCount + 1)}}>Add to cart</button>
			<p>Quantity: {quantity}</p>
		</div>
	)
}

export default Product;
