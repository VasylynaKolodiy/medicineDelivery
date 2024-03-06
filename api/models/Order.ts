const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
});

export const productSchema = new Schema({
  _id: String,
  title: String,
  price: Number,
  description: String,
  shop: String,
  image: String,
  quantity: Number
});

const Order = new Schema({
  user: {type: {userSchema}},
  products: {type: [productSchema]},
  total: Number
});

module.exports = model('Order', Order)