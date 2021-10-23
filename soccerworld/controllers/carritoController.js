const path = require('path');

const controlador = {
  productos: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/productCart.html'));
  }
};

module.exports = controlador;