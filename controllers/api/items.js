const Item = require('../../models/item');

module.exports = {
  index,
  indexBrand,
  show
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function indexBrand(req, res) {
  const items = await Item.find({}).sort('name').populate('brand').exec();
  items.sort((a, b) => a.brand.sortOrder - b.brand.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}