const products = require('../products.json');

// INSTRUCTIONS FOR LINES '15-20'
// - Let's allow the user to filter the products based on price
//   - Add a conditional before sending the products that checks if there's a property called `price` on the `req.query` object
//     - If there is, filter through the `products` array and send any items that cost _more_ or the same as the provided price
//       - Remember, query values are received as strings and the prices in our objects are numbers
//     - If there is no `price` property on `req.query`, send all the products
//   - Test in the browser
//     - You can attach queries to the request by appending them to the url
//     - `http://localhost:[your-port]/api/products?price=10.99`
//     - Try it with various prices and make sure only products that cost the same or more than the price are received.
//   - Query parameters are always optional and should default to a request for all the data if no query is provided
const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(
            (val) => val.price >= parseInt(req.query.price)
        )
        return res.status(200).send(items)
    }
    res.status(200).send(products);
};

// INSTRUCTIONS
// _ The handler should be required from a file called `getProduct.js`
// _ Remember to require the `products.json` file so it's in scope
// _ It should use `req.params` to find the item with the matching `id` in our products array
// _ If the item is in the array, send it back to the client
// _ If it is not in the array, it should send a status of 500 with a message `Item not in list`
// _ Note: `req.params` will be a string and the id we're checking against is a number
// _ Test the endpoint in your browser by entering `http://localhost:[your-port]/api/products/2`
// _ It should print the content from the item with an id of 2 from our dataset
// _ Try it with an id that doesn't exist (1334)
// _ It should print `Item not in list` to the screen

const getProduct = (req, res) => {
    // find returns the item if it finds it, or undefined if not
    const item = products.find((val) => val.
    id === parseInt(req.params.id))
    if(!item) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
};

module.exports = {
    getProducts,
    getProduct
};