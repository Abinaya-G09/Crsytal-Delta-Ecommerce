import express from 'express';
import productList from '../sampleResponse/productList';

let Product = express.Router();

Product.get('/', async (req, res) => {
  res.status(200).json(productList);
});

Product.get('/:id', async (req, res) => {
  res.status(200).json([productList[req.params.id]]);
});

export default Product;
