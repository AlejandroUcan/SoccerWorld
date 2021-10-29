const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

router.get('/users', userController.list);

module.exports = router;