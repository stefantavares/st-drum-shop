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
    {name: 'Gretsch', sortOrder: 50}, // [4]
    {name: 'Istanbul Agop', sortOrder: 60}, // [5]
    {name: 'Promark', sortOrder: 70}, // [6]
    {name: 'Vic Firth', sortOrder: 80}, // [7]
    {name: 'Vater', sortOrder: 90}, // [8]
    {name: 'Remo', sortOrder: 100}, // [9]
    {name: 'Evans', sortOrder: 100}, // [10]
    {name: 'Gibraltar', sortOrder: 100}, // [10]
  ])

  await Item.deleteMany({});
  const items = await Item.create([
    // Drum Kits
    {
      name: 'Ludwig Classic Maple 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Signet-105-Gigabeat-3-Piece-Shell-Pack-Natural-Teak/J04113000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 2149,
      size: '',
      description: ''
    },
    {
      name: 'Ludwig Neusonic 3 piece FAB Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Neusonic-3-piece-FAB-Shell-Pack-with-22-in.-Bass-Drum-Black-Velvet/L85733000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 1259,
      size: '',
      description: ''
    },
    {
      name: 'Ludwig Signet 105 Gigabeat 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Classic-Maple-3-Piece-Fab-Shell-Pack-with-22-in.-Bass-Drum-Red-Sparkle/K45602000006000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 3450,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Export EXL New Fusion 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Export-EXL-New-Fusion-5-Piece-Shell-Pack-Black-Smoke/J20454000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 599,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Decade Maple 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Decade-Maple-3-Piece-Shell-Pack-Satin-Black-Burst/J40006000004000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 1299,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Crystal Beat 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Crystal-Beat-5-Piece-Shell-Pack-Ultra-Clear/J15997000001000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 1889,
      size: '',
      description: ''
    },
    {
      name: 'Gretsch Drums Broadkaster Series 3- Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Broadkaster-Series-3-Piece-Shell-Pack-with-22-Bass-Drum-and-Vintage-Hardware-Satin-Copper/J20940000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 3000,
      size: '24x14, 12x9, 16x16',
      description: 'Awesome drum kit no doubt.'
    },
    {
      name: 'Gretsch Drums Renown 4-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Renown-4-Piece-Shell-Pack-with-20-Bass-Drum-Piano-Black/L44366000005000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 1399,
      size: '',
      description: ''
    },
    {
      name: 'Gretsch Drums Catalina Special Edition Birch 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Catalina-Special-Edition-Birch-5-Piece-Shell-Pack-with-20-Bass-Drum-Ebony-Satin/L48537000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 799,
      size: '',
      description: ''
    },
    // Snares
    {
      name: 'Ludwig Black Beauty', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Black-Beauty-Snare-Drum-14-x-8-in./J50184000000000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 1125,
      size: '',
      description: ''
    },
    {
      name: 'Ludwig LE Legacy Mahogany', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Limited-Edition-Legacy-Mahogany-14x6.5-Snare-Drum-Black-Cat/L83310000000000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 1209,
      size: '',
      description: ''
    },
    {
      name: 'Ludwig Supraphonic', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Supraphonic-Snare-Drum-Chrome-14-x-6.5-in./446280000375488-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Ludwig Acrolite', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Hammered-Acrolite-Snare-Drum-14-x-6.5-in./K47596000002000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Sensitone', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/L85273000002002-00-720x720.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Masters BCX Birch Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Modern-Utility-Maple-Snare-Drum-14-x-6.5-in.-Matte-Natural/J53406000003002-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 477.99,
      size: '',
      description: ''
    },
    {
      name: 'Pearl Reference Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Reference-Snare-Drum-Natural-Maple-14-X-6.5/446698000954488-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 719.40,
      size: '',
      description: ''
    },
    {
      name: 'George Way Nyatoh Snare Drum', 
      img: 'https://cdn.long-mcquade.com/files/94272/md_08ac1df03ca5ef9c55379da162dce709.jpg', 
      category: categories[1], 
      brand: brands[3], 
      price: 575,
      size: '',
      description: ''
    },
    {
      name: 'George Way Aristocrat Studio Snare', 
      img: 'https://cdn.long-mcquade.com/files/172016/md_e7c6cd7f8224715d5d9a6f5d744d487d.jpg', 
      category: categories[1], 
      brand: brands[3], 
      price: 595,
      size: '',
      description: ''
    },
    // Cymbals
    {
      name: 'Istanbul Agop Xist Series Crash', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-Xist-Series-Crash_480x480.jpg?v=1639950813', 
      category: categories[2], 
      brand: brands[5], 
      price: 154.99,
      size: '',
      description: ''
    },
    {
      name: 'Istanbul Agop Traditional Dark Crash', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-Traditional-Dark-Crash_480x480.jpg?v=1639950807', 
      category: categories[2], 
      brand: brands[5], 
      price: 239.99,
      size: '',
      description: ''
    },
    {
      name: 'Istanbul Agop Joey Waronker Signature Ride', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-24-Joey-Waronker-Signature-Ride_480x480.jpg?v=1639950802', 
      category: categories[2], 
      brand: brands[5], 
      price: 699.99,
      size: '',
      description: ''
    },
    // Sticks
    {
      name: 'Promark 5AB', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Select-Balance-Rebound-Balance-Acorn-Tip-Drum-Sticks-5B/J30833000003000-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[6], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Vic Firth 5A', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Classic-Hickory-Drum-Sticks-Wood-5A/460490000645021-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[7], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Vater 3A', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Hickory-Fatback-3A-Drum-Sticks-Wood/J44212000000002-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[8], 
      price: 0,
      size: '',
      description: ''
    },
    // Heads
    {
      name: 'Remo Coated Ambassador', 
      img: '', 
      category: categories[4], 
      brand: brands[9], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Remo Coated Emperor', 
      img: '', 
      category: categories[4], 
      brand: brands[9], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Remo Powerstroke 3', 
      img: '', 
      category: categories[4], 
      brand: brands[9], 
      price: 0,
      size: '',
      description: ''
    },
    // Hardware
    {
      name: 'Stand 1', 
      img: '', 
      category: categories[5], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Stand 2', 
      img: '', 
      category: categories[5], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Stand 3', 
      img: '', 
      category: categories[5], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    // Accessories
    {
      name: 'Accessory 1', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Accessory 2', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Accessory 3', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
  ]);

  console.log(items)

  process.exit();

})();