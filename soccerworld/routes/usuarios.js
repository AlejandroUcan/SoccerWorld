const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/registro', usuariosController.registro);
router.get('/acceso', usuariosController.login)

module.exports = router;