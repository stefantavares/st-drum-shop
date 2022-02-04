require('dotenv').config();
require('./config/database');
const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Full Kits', sortOrder: 10}, // [0]
    {name: 'Snare Drums', sortOrder: 20}, // [1]
    {name: 'Cymbals', sortOrder: 30}, // [2]
    {name: 'Sticks', sortOrder: 40}, // [3]
    {name: 'Heads', sortOrder: 50}, // [4]
    {name: 'Hardware', sortOrder: 60}, // [5]
    {name: 'Accessories', sortOrder: 70}, // [6]
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: '', img: '', category: categories[0], price: 0},
  ]);

  console.log(items)

  process.exit();

})();