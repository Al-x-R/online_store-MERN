const products = require('./../data/products');

const express = require('express');

const productRouter = express.Router();

productRouter.get('/products', (req, res) => res.json(products));
productRouter.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


module.exports = productRouter;