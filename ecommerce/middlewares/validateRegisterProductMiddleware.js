const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('equipo').notEmpty().withMessage('Debe escribir el nombre del equipo'),
    body('liga').notEmpty().withMessage('Debe elegir la liga donde juega el equipo'),
    body('marca').notEmpty().withMessage('Debe elegir la marca patrocinadora'),
    body('tipo').notEmpty().withMessage('Debe elegir el tipo del jersey'),
    body('temporada').notEmpty().withMessage('Debe elegir la temporada del jersey'),
    body('categoria').notEmpty().withMessage('Debe elegir la categoria del produto'),
    body('precio').notEmpty().withMessage('Debe escribir el precio del producto'),
    body('product').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]