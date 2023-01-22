import React from 'react';
import { useState } from 'react';

const Product = ({ props }) => {
	const [quantity, setQuantity] = useState(0);
	const descmaxlen = 80;

	return (
		<>
			<article className='product-article flex-item-container container'>
				<div className='product-container'>
					<div className='container'>
						<h2>{ props.name }</h2>
					</div>

					<div className='container'>
						<p>
							{ 
								props.desc.length > descmaxlen ? 
								props.desc.substring(0, descmaxlen - 3) + '...' : 
								props.desc
							}
						</p>
					</div>

					<div className='container'>
						<p>{ props.price }</p>
						<button onClick={ () => { alert('Item added to cart'); setQuantity((prevCount) => prevCount + 1) } }>Add to cart</button>
						<p>Quantity: { quantity }</p>
					</div>
				</div>
			</article>
		</>
	)
}

export default Product;
