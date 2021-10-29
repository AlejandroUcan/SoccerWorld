const db = require('../database/models');

module.exports = { 
  list: (req, res) => {
    console.log('list');
    db.Producto
      .findAll()
        .then(products => {
          return res.status(200).json({
            total: products.length,
            data: products,
            status: 200
          })
        })    
  }, 
  details: (req, res) => {
    console.log('details');
    let productId = req.params.id;
    db.Producto
    .findByPk(productId)
      .then(product => {
        return res.status(200).json({
          equipo: product.equipo,
          descripcion: product.tipo + ' ' + product.temporada,
          liga: product.liga,
          imagen: 'http://localhost:3000/images/products/' + product.imagen,
          status: 200
        })
      })
  },
  last: (req, res) => {
    console.log('Last');
    db.Producto
      .findAll({
        order: [
          ['id', 'DESC'],
        ],
        limit: 1
      })
      .then(products => {
        return res.status(200).json({
          data: products,
          status: 200
        })
      })
  },  
}