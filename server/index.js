const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts');

const app = express();

const port = 3001;

app.get('/api/products', getProducts);

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
});