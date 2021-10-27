const db = require('../database/models');

const controller = {
  index: (req, res) => {
    db.Producto.findAll({
      /*where: {
        marca: 'Nike'
      }, */
      limit: 10
    }).then(resultados => {
      res.render('index', { products: resultados });
    })
  }
}

module.exports = controller;