var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

/* GET Listado de productos. */
router.get('/', productsController.list);
/* GET Formulario de creación de productos. */
router.get('/create', productsController.create);
/* GET Detalle de un producto particular. */
router.get('/:id', productsController.details);
/* POST Acción de creación (a donde se envía el formulario). */
router.post('/', productsController.add);
/* GET Formulario de edición de productos. */
router.get('/:id/edit', productsController.edit);
/* PUT Acción de edición (a donde se envía el formulario). */
router.put('/:id', productsController.update);
/* DELETE Acción de borrado. */
router.delete('/:id', productsController.delete);

module.exports = router;
