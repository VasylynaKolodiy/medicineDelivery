const {Schema, model} = require('mongoose');

const Shop = new Schema({
  name: {type: String},
});

module.exports = model('Shop', Shop)