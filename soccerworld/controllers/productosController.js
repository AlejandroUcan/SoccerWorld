const path = require('path');

const controlador = {
  detalles: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/productDetail.html'));
  }
};

module.exports = controlador;