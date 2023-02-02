require('dotenv').config({ path:__dirname+'/./../.env' });

const express = require('express');
const cors = require('cors');

const { MongoClient } = require('mongodb');

const Fuse = require('fuse.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function createDummyDocuments(collection) {
	const dummyProducts = [];
	for(let i = 0; i < 20; i++) {
		dummyProducts.push({
			name: 'Generic Product',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est libero, mattis sed dolor nec, ultricies rhoncus orci.',
			price: '£29.99',
			productid: i,
			randExtra: Math.floor(Math.random() * 100),
		});
	}

	await collection.insertMany(dummyProducts);
	console.log('Finished creating dummy documents!');
}

const PORT = process.env.PORT || 8080;

const mongoClient = new MongoClient(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
});
let db, collection;

const fuseSearchOptions = {
	isCaseSensitive: false,
	keys: ['name', 'desc']
};

app.get('/api', (req, res) => {
	collection.find().toArray(function(err, fetchedData) {
		if(err) throw err;
		const fuse = new Fuse(fetchedData, fuseSearchOptions);
		let result = fuse.search(' ')
		res.json({ 'fetchedData': result });
	});
});

app.listen(PORT, () => {
	mongoClient.connect();

	db = mongoClient.db('ecommerce-site');
	collection = db.collection('dummy-products');

	console.log(`Express.js on ${PORT}`);

	// createDummyDocuments(collection);
});
