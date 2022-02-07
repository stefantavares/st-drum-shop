// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Category = require('./models/category');
const Brand = require('./models/brand');
const Order = require('./models/order');

(async function() {
  // Local variables will come in handy
  let u, i, c, b, o;
  console.log(await Item.find({}));

})();