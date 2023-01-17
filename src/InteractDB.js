import { MongoClient } from 'mongodb';

export async function connectToCluster(uri) {
	let mongoClient;

	try {
		mongoClient = new MongoClient(uri);
		await mongoClient.connect();

		return mongoClient;
	} catch (error) {
		process.exit();
	}
}

export async function crudOperation() {
	const uri = process.env.DB_URI;
	let mongoClient;

	try {
		mongoClient = await connectToCluster(uri);
		
		const db = mongoClient.db('ecommerce-site');
		const collection = db.collection('products');

		await createTestProduct(collection);
	} finally {
		await mongoClient.close();
	}
}

export async function createTestProduct(collection) {
	const productDocument = {
		name: 'Generic Product',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est libero, mattis sed dolor nec, ultricies rhoncus orci. Etiam in ex vitae nulla ornare aliquet. Aenean lorem diam, tristique at sagittis id, aliquet sit amet ex. Nulla facilisi. In eget velit massa. Sed justo enim, venenatis vel maximus sed, volutpat id lacus. Maecenas ut volutpat augue. Aliquam quis orci vel nisl gravida pellentesque a vel lacus. Vestibulum nec libero sed nunc dapibus sodales.',
		price: '£29.99',
	};

	await collection.insertOne(productDocument);
}
