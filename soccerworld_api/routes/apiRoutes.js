const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

router.get('/users', userController.list);
router.get('/users/:id', userController.details);
router.get('/users/user/last', userController.last);
router.get('/products', productController.list);
router.get('/products/:id', productController.details);
router.get('/products/product/last', productController.last);

module.exports = router;