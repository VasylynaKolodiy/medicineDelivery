import { Request, Response } from 'express';
const Order = require('../models/Order');

interface QueryParams {
  page: number;
  limit: number;
  email: string;
}

const saveOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const { user, products, total } = req.body;
    const order = new Order({ user, products, total });
    const createdOrder = await order.save();
    return res.status(200).json(createdOrder);
  } catch (e) {
    console.error('Error saving order:', e);
    res.status(500).json({ message: 'Failed to save order' });
  }
};

const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const queryParamsUnknown = req.query as unknown;
    const queryParams = queryParamsUnknown as QueryParams;
    const { email } = queryParams;

    let query: any = {};
    if (email) {
      query = { 'user.email': email };
    }

    let response = await Order.find(query);

    if (!email) {
      response = [];
    }

    res.status(200).json(response);
  } catch (e) {
    console.error('Error fetching orders:', e);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

module.exports = {
  saveOrder,
  getOrders,
};