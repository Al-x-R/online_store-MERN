const express = require('express');
const Product = require('./../models/productModel');
const asyncHandler = require('express-async-handler');

const productRouter = express.Router();

productRouter.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error('Some error');
    res.json(products);
  }),
);

productRouter.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  }),
);

module.exports = productRouter;