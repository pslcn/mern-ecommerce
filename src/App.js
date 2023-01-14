import {useState} from 'react';

const Product = (props) => {
	const [quantity, setQuantity] = useState(0);
	const descmaxlen = 80;
	return (
		<div className="Product">
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

const App = () => {
	const loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a cursus lectus. Donec eget lectus id ipsum vulputate pharetra. Etiam vestibulum ex vehicula, commodo sem a, egestas felis. Aenean eu condimentum mauris. Donec ornare ante nec nibh molestie rutrum. Nunc interdum sagittis bibendum. Quisque ex purus, pellentesque eu est vitae, porta vestibulum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat velit vel justo imperdiet, sed efficitur felis sodales. Cras iaculis sem purus, vel maximus quam cursus eget. Duis sed risus ac nunc laoreet consequat. Aenean suscipit orci nec finibus fermentum.';
	return (
		<div className="App">
			<Product name={'Generic Product'} desc={loremipsum} price={'£10.99'}/>
		</div>
	);
}

export default App;
