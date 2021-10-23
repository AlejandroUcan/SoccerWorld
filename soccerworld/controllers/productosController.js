const path = require('path');
const controlador = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }, 
    details: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    create: (req, res) => {
        res.send('Create de productos');
    }
};

module.exports = controlador;