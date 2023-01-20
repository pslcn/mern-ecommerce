const express = require('express');
const cors = require('cors');

const app = expres();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
	res.json({message: 'Hello World!'});
});

app.listen(PORT, () => {
	console.log('Express.js on ${PORT}');
});
