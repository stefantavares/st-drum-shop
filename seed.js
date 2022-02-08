require('dotenv').config();
require('./config/database');
const Category = require('./models/category');
const Brand = require('./models/brand');
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

  await Brand.deleteMany({});
  const brands = await Brand.create([
    {name: 'Ludwig', sortOrder: 10}, // [0]
    {name: 'Slingerland', sortOrder: 20}, // [1]
    {name: 'Pearl', sortOrder: 30}, // [2]
    {name: 'George Way', sortOrder: 40}, // [3]
    {name: 'Yamaha', sortOrder: 50}, // [4]
    {name: 'Istanbul', sortOrder: 60}, // [5]
    {name: 'Promark', sortOrder: 70}, // [6]
    {name: 'Vic Firth', sortOrder: 80}, // [7]
    {name: 'Vater', sortOrder: 90}, // [8]
    {name: 'Remo', sortOrder: 100}, // [9]
  ])

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Pearl Export', img: '', category: categories[0], brand: brands[2], price: 300},
    {name: 'Yamaha Beach Custom', img: '', category: categories[0], brand: brands[4], price: 2499},
    {name: 'Ludwig Classic Maple', img: '', category: categories[0], brand: brands[0], price: 3450},
    {name: 'Ludwig Black Beauty', img: 'https://cdn.long-mcquade.com/files/2230/md_318abd73fecc2e353ce285c4c0ecd0d3.jpg', category: categories[1], brand: brands[0], price: 0},
    {name: 'Pearl Sensitone', img: '', category: categories[1], brand: brands[2], price: 0},
    {name: 'Ludwig Acrolite', img: '', category: categories[1], brand: brands[0], price: 0},
    {name: 'Slingerland COB', img: '', category: categories[1], brand: brands[1], price: 0},
    {name: 'George Way Coppertone', img: '', category: categories[1], brand: brands[3], price: 0},
    {name: 'Instanbul Traditional Crash', img: '', category: categories[2], brand: brands[5], price: 0},
    {name: 'Instanbul Signature Ride', img: '', category: categories[2], brand: brands[5], price: 0},
    {name: 'Istanbul Dark Hats', img: '', category: categories[2], brand: brands[5], price: 0},
    {name: 'Promark 5AB', img: '', category: categories[3], brand: brands[6], price: 0},
    {name: 'Vic Firth 5A', img: '', category: categories[3], brand: brands[7], price: 0},
    {name: 'Vater 3A', img: '', category: categories[3], brand: brands[8], price: 0},
    {name: 'Remo Coated Ambassador', img: '', category: categories[4], brand: brands[9], price: 0},
    {name: 'Remo Coated Emperor', img: '', category: categories[4], brand: brands[9], price: 0},
    {name: 'Remo Powerstroke 3', img: '', category: categories[4], brand: brands[9], price: 0},
    {name: 'Stand 1', img: '', category: categories[5], brand: brands[2], price: 0},
    {name: 'Stand 2', img: '', category: categories[5], brand: brands[2], price: 0},
    {name: 'Stand 3', img: '', category: categories[5], brand: brands[2], price: 0},
    {name: 'Accessory 1', img: '', category: categories[6], brand: brands[2], price: 0},
    {name: 'Accessory 2', img: '', category: categories[6], brand: brands[2], price: 0},
    {name: 'Accessory 3', img: '', category: categories[6], brand: brands[2], price: 0},
  ]);

  console.log(items)

  process.exit();

})();