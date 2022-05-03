const express = require('express');
// const getProduct = require('../products.json');
const { getProducts, getProduct } = require('./getProducts');

const app = express();

const port = 3005;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
});