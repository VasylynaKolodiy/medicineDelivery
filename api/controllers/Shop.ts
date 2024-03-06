import { Request, Response } from 'express';
const Shop = require('../models/Shop')

const getShops = async (req: Request, res: Response): Promise<void> => {
  try {
    const shops = await Shop.find()
    res.status(200).json(shops);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'error' });
  }
};

module.exports = {
  getShops,
};