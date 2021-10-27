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

    db.Producto.findByPk(idProductDetails)
      .then(resultados => {
        res.render('product/details', {product: resultados})
      })
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
    let idProductEdit = req.params.id;

    db.Producto.findByPk(idProductEdit)
      .then(resultados => {
        res.render('product/edit', { productId: idProductEdit, product: resultados })
      })
  },
  update: (req, res) => {
    let idProductUpdate = req.params.id;
    const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
      db.Producto.findByPk(idProductUpdate)
        .then(resultados => {
          res.render('product/edit', {
            productId: idProductUpdate,
            product: resultados,
            errors: resultValidation.mapped(),
            oldData: req.body
          });
        })
		} else {
      db.Producto.update({
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
    
      res.redirect('/user/profile');
    }
  },
  delete: (req, res) => {
    let idProductDelete = req.params.id;
    db.Producto.destroy(
     {
       where: { id: idProductDelete }
     }  
    )
    return res.redirect('/user/profile');
  },
  filtro: (req, res) => {
    let filtroProducto = req.body.search;
    db.Producto.findAll({
      where: {
        equipo: filtroProducto 
      }, 
    }).then(resultados => {
      res.render('index', { products: resultados });
    })
  }
}

module.exports = controller;