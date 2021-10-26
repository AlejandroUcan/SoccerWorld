const Product = require('../models/Product');

const controller = {
  index: (req, res) => {
	  let productsInDB = Product.findAll();
    res.render('index', { products: productsInDB });
  }
}

module.exports = controller;