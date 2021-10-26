const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Middlewares
const uploadFile = require('../middlewares/multerProductMiddleware');
const validations = require('../middlewares/validateRegisterProductMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

/* GET Listado de productos. */
router.get('/', productController.list);
/* GET Formulario de creación de productos. */
router.get('/create', productController.create);
/* GET Detalle de un producto particular. */
router.get('/:id', productController.details);
/* POST Acción de creación (a donde se envía el formulario). */
router.post('/', uploadFile.single('imagen'), validations, productController.processCreate);
/* GET Formulario de edición de productos. */
router.get('/:id/edit', productController.edit);
/* PUT Acción de edición (a donde se envía el formulario). */
router.put('/:id', uploadFile.single('product'), validations, productController.update);
/* DELETE Acción de borrado. */
router.delete('/:id', productController.delete);

module.exports = router;
