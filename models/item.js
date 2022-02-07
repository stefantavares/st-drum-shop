const mongoose = require('mongoose');
require ('./category');
require ('./brand');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);