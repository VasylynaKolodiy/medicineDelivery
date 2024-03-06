import { Request, Response } from 'express';
const Order = require('../models/Order')

const saveOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const {user, products, total} = req.body;

    const order = new Order({user, products, total});
    const createdOrder = await order.save();
    return res.status(200).json(createdOrder);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'error' });
  }
};

module.exports = {
  saveOrder,
};