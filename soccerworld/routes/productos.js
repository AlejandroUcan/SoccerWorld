const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.get('/details', productosController.details);

module.exports = router;