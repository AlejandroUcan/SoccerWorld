const { validationResult } = require('express-validator');

const Product = require('../models/Product');

const controller = {
  list: (req, res) => {
    let productsInDB = Product.findAll();
    res.render('product/list', { products: productsInDB });
  },
  details: (req, res) => {
    let id = req.params.id;
    let productFound = Product.findByPk(id);
    res.render('product/details', {product: productFound})
  },
  create: (req, res) => {
    res.render('product/create');
  },
  processCreate: (req, res) => {
    const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('product/create', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

    let productId = Product.generateId();
		let productToCreate = {
      id: productId,
			...req.body,
			imagen: req.file.filename
		}

		let productCreated = Product.create(productToCreate);
    return res.redirect('/product');
  },
  edit: (req, res) => {
    let id = req.params.id;
    let productFound = Product.findByPk(id);
    res.render('product/edit', {product: productFound})
  },
  update: (req, res) => {
    let idProduct = req.params.id;
    let productFound = Product.findByPk(idProduct);
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
			return res.render('product/edit', {
        product: productFound,
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
    
    let productToUpdate = {
      id: idProduct,
			...req.body,
			imagen: req.file.filename
		}

		let productUpdated = Product.update(productToUpdate);
    return res.redirect('/product');
  },
  delete: (req, res) => {
    let id = req.params.id;
    let productDeleted = Product.delete(id);
    if(productDeleted) {
      return res.redirect('/product');
    }
    
  }
}

module.exports = controller;