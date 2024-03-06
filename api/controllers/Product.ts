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

module.exports = {
  getProducts,
};