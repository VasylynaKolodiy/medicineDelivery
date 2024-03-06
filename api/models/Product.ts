const {Schema, model} = require('mongoose');

const Product = new Schema({
  title: {type: String},
  price: {type: Number},
  description: {type: String},
  shop: {type: String},
  image: {type: String},
});

module.exports = model('Product', Product)