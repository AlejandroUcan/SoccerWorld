const { validationResult } = require('express-validator');

const db = require('../database/models');

const controller = {
  list: (req, res) => {    
    db.Producto.findAll()
      .then((resultados) => {
        res.render('product/list', { products: resultados });
      });
  },
  details: (req, res) => {
    let idProductDetails = req.params.id;
    let productFound = db.Producto.findByPk({
      where: { id: idProductDetails}
    });
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

    db.Producto.create({
      equipo: req.body.equipo,
      liga: req.body.liga,
      marca: req.body.marca,
      tipo: req.body.tipo,
      temporada: req.body.temporada,
      categoria: req.body.categoria,
      precio: req.body.precio,
      imagen:  req.file.filename
    });

    return res.redirect('/user/profile');
  },
  edit: (req, res) => {
    let id = req.params.id;
    let productFound = Product.findByPk(id);
    res.render('product/edit', {product: productFound})
  },
  update: (req, res) => {
    let idProductUpdate = req.params.id;

    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
			return res.render('product/edit', {
        product: productFound,
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
    
    db.Producto.update(
      {
        equipo: req.body.equipo,
        liga: req.body.liga,
        marca: req.body.marca,
        tipo: req.body.tipo,
        temporada: req.body.temporada,
        categoria: req.body.categoria,
        precio: req.body.precio,
        imagen:  req.file.filename
      }, 
      {
        where: { id: idProductUpdate}
      }
    );

    return res.redirect('/user/profile');
  },
  delete: (req, res) => {
    let idProductDelete = req.params.id;
    db.Producto.destroy(
     {
       where: { id: idProductDelete }
     }  
    )
    return res.redirect('/user/profile');
  }
}

module.exports = controller;