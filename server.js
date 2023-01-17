require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const mongoClient = new MongoClient(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoClient.connect();
let db, collection;

try {
	db = mongoClient.db('ecommerce-site');
	collection = db.collection('dummy-products');
} finally {
	mongoClient.close();
}

const dummyProduct = {
	name: 'Generic Product',
	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est libero, mattis sed dolor nec, ultricies rhoncus orci. Etiam in ex vitae nulla ornare aliquet. Aenean lorem diam, tristique at sagittis id, aliquet sit amet ex. Nulla facilisi. In eget velit massa. Sed justo enim, venenatis vel maximus sed, volutpat id lacus. Maecenas ut volutpat augue. Aliquam quis orci vel nisl gravida pellentesque a vel lacus. Vestibulum nec libero sed nunc dapibus sodales.',
	price: '£29.99',
};

async function createProduct(collection, product) {
	await collection.insertOne(product);
}

app.use(express.json());

app.listen(3000, () => {
});
