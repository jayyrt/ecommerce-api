const products = require('../products.json');

const getProducts = (req, res) => {
    res.status(200).send(products);
};

// const getProduct = (req, res) => {
    // res.status(200).send(product);
// }

module.exports = getProducts;