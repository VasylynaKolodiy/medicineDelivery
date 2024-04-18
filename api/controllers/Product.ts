import { Request, Response } from 'express';
const Product = require('../models/Product')

interface QueryParams {
  page: number;
  limit: number;
  shop: string;
}

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const queryParamsUnknown = req.query as unknown;
    const queryParams = queryParamsUnknown as QueryParams;
    const { page, limit, shop } = queryParams;
    const response = await Product.find(shop ? {shop} : {});
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'error' });
  }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (e) {
    console.error('Error getting product by ID:', e);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
};