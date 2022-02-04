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
    {name: 'Pearl Export', img: '', category: categories[0], price: 0},
    {name: 'Yamaha Beach Custom', img: '', category: categories[0], price: 0},
    {name: 'Ludwig Classic Maple', img: 'https://www.long-mcquade.com/files/123715/lg_f8c1d5131509efa6f92b61d08842f530.jpg', category: categories[0], price: 0},
    {name: 'Ludwig Black Beauty', img: '', category: categories[1], price: 0},
    {name: 'Pearl Sensitone', img: '', category: categories[1], price: 0},
    {name: 'Ludwig Acrolite', img: '', category: categories[1], price: 0},
    {name: 'Instanbul Traditional Crash', img: '', category: categories[2], price: 0},
    {name: 'Instanbul Signature Ride', img: '', category: categories[2], price: 0},
    {name: 'Istanbul Dar Hats', img: '', category: categories[2], price: 0},
    {name: 'Promark 5AB', img: '', category: categories[3], price: 0},
    {name: 'Vic Firth 5A', img: '', category: categories[3], price: 0},
    {name: 'Vater 3A', img: '', category: categories[3], price: 0},
    {name: 'Remo Coated Ambassador', img: '', category: categories[4], price: 0},
    {name: 'Remo Coated Emperor', img: '', category: categories[4], price: 0},
    {name: 'Remo Powerstroke 3', img: '', category: categories[4], price: 0},
    {name: 'Stand 1', img: '', category: categories[5], price: 0},
    {name: 'Stand 2', img: '', category: categories[5], price: 0},
    {name: 'Stand 3', img: '', category: categories[5], price: 0},
    {name: 'Accessory 1', img: '', category: categories[6], price: 0},
    {name: 'Accessory 2', img: '', category: categories[6], price: 0},
    {name: 'Accessory 3', img: '', category: categories[6], price: 0},
  ]);

  console.log(items)

  process.exit();

})();