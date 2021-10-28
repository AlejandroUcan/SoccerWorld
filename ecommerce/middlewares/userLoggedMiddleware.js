const { login } = require('../controllers/userController');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	//let userFromCookie = User.findByField('email', emailInCookie);
	if(emailInCookie) {
	  console.log(emailInCookie);
	  db.Usuario.findOne({
		where: {
		  email: emailInCookie 
		}
	  }).then(resultado => {
		if(resultado) {
		  req.session.userLogged = resultado;
		}
	  })
	} 

	//if (userFromCookie) {
	//	req.session.userLogged = userFromCookie;
	//}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;