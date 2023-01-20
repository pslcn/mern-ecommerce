require('dotenv').config({path:__dirname+'/./../.env'});

const express = require('express');
const cors = require('cors');

const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function createDummyDocuments(collection) {
	const dummyProducts = [];
	for(let i = 0; i < 20; i++) {
		dummyProducts.push({
			name: 'Generic Product',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est libero, mattis sed dolor nec, ultricies rhoncus orci.',
			price: '£29.99',
			randExtra: Math.floor(Math.random() * 100),
		});
	}

	await collection.insertMany(dummyProducts);
	console.log('Finished creating dummy documents!');
}

const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
	res.send(productarray);
});

app.listen(PORT, () => {
	const mongoClient = new MongoClient(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoClient.connect();

	const db = mongoClient.db('ecommerce-site');
	const collection = db.collection('dummy-products');

	console.log(`Express.js on ${PORT}`);

	createDummyDocuments(collection);
});
