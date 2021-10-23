const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/productos', carritoController.productos);

module.exports = router;