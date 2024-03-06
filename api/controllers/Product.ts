import { Request, Response } from 'express';
const Product = require('../models/Product')

interface QueryParams {
  page: number;
  limit: number;
  shop: string;
}

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(444)
    const queryParamsUnknown = req.query as unknown;
    const queryParams = queryParamsUnknown as QueryParams;
    const { page, limit, shop } = queryParams;
    console.log(queryParams, 'queryParams')
    const resp = await Product.find(shop ? {shop} : {});
    console.log(resp, 'res')
    const products = await Product.find({})
      .collation({ 'locale': 'en' })
      .skip(page * limit)
      .limit(limit);
    const count = 11;
    // const count = await Product.count({filter: {}});

    res.status(200).json(resp);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'error' });
  }
};

module.exports = {
  getProducts,
};