const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('fullName')
	    .notEmpty().withMessage('Tienes que escribir un nombre').bail()
		.isLength({ min: 5}).withMessage('Debes ingresar un nombre más largo'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password')
	    .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('Debes ingresar una contraseña más larga'),
	body('country').notEmpty().withMessage('Tienes que elegir un país'),
	body('avatar').custom((value, { req }) => {
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