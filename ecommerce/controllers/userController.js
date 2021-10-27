const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const db = require('../database/models');

const controller = {
  register: (req, res) => {
	return res.render('userRegisterForm');
  },
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
	if (resultValidation.errors.length > 0) {
      res.render('userRegisterForm', {
		errors: resultValidation.mapped(),
		oldData: req.body
	  })
	} else {
	  if(req.body.email){
		db.Usuario.findOne({
		  where: {
			email: req.body.email 
		  }
		}).then(resultado => {
		  if(resultado) {
			res.render('userRegisterForm', {
			  errors: {
				email: {
				  msg: 'Este email ya está registrado'
			    }
			  },
			  oldData: req.body
			});
		  } else {
			db.Usuario.create({
			  nombre: req.body.fullName,
			  email: req.body.email,
			  password: bcryptjs.hashSync(req.body.password, 10),
			  estado: req.body.country,
			  avatar: req.file.filename
			})
		
			res.redirect('/user/login');
		  }
	    })
	  }	
	}
  },	
  login: (req, res) => {
	return res.render('userLoginForm');
  },
  loginProcess: (req, res) => {
	db.Usuario.findOne({
	  where: {
		email: req.body.email 
	  }
	}).then(resultado => {
	  if(resultado) {
		let isOkThePassword = bcryptjs.compareSync(req.body.password, resultado.password);
				
		if (isOkThePassword) {
		  req.session.userLogged = resultado;
		
		  if(req.body.remember_user) {
			res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
		  }
		
		  res.redirect('/user/profile');
	    } else {
		  res.render('userLoginForm', {
		    errors: {
			  email: {
			    msg: 'Las credenciales son inválidas'
		      }
			}
		  })
	    }
	  } else {
		res.render('userLoginForm', {
		  errors: {
			email: {
			  msg: 'No se encuentra este email en nuestra base de datos'
			}
		  }
		})
	  }
	})
  },
  profile: (req, res) => {
	return res.render('userProfile', {
	  user: req.session.userLogged
	});
  },
  logout: (req, res) => {
	res.clearCookie('userEmail');
	req.session.destroy(); 
	return res.redirect('/');
  },
  edit: (req, res) => {
	let idUserEdit = req.params.id;
    db.Usuario.findByPk(idUserEdit)
      .then(resultados => {
        res.render('userEditForm', { userId: idUserEdit, user: resultados })
    })
  },
  update: (req, res) => {
	let idUserUpdate = req.params.id;

	const resultValidation = validationResult(req);
	
	if (resultValidation.errors.length > 0) {
	  db.Usuario.findByPk(idUserUpdate)
		.then(resultados => {
		  res.render('userEditForm', {
			userId: idUserUpdate, 
			user: resultados,
			errors: resultValidation.mapped(),
			oldData: req.body
		  })
		})
	} else {
	  let userEmail = req.body.email;
	  let userPassword = req.body.password;

	  db.Usuario.findOne({
		where: {
		  email: userEmail 
		}
	  }).then(resultado => {
		if(resultado){
		  if(resultado.id == idUserUpdate) {
			if(resultado.password == userPassword){
			  console.log('mism contrseñ');
			  db.Usuario.update({
				nombre: req.body.fullName,
				email: req.body.email,
				password: req.body.password,
				estado: req.body.country,
				avatar: req.file.filename
			  },
			  {
				where: { id: idUserUpdate }
			  }) 
				  
			  res.clearCookie('userEmail');
			  req.session.destroy(); 
			  return res.redirect('/user/login');
			} else {
			  db.Usuario.update({
				nombre: req.body.fullName,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				estado: req.body.country,
				avatar: req.file.filename
			  },
			  {
				where: { id: idUserUpdate }
			  }) 
  
			  res.clearCookie('userEmail');
			  req.session.destroy(); 
			  return res.redirect('/user/login');
			}
		  } else {
			db.Usuario.findByPk(idUserUpdate)
			.then(resultados => {
			  res.render('userEditForm', {
				userId: idUserUpdate, 
				user: resultados,
				errors: {
				  email: {
					msg: 'Este email ya ha sido registrado'
				  }
				},
				oldData: req.body
			  })
			})
		  }
		} else {
		  db.Usuario.findByPk(idUserUpdate)
		  .then(resultado => {
			if(resultado.password == userPassword){
			  db.Usuario.update({
				nombre: req.body.fullName,
				email: req.body.email,
				password: req.body.password,
				estado: req.body.country,
				avatar: req.file.filename
			  },
			  {
				where: { id: idUserUpdate }
			  }) 
				
			  res.clearCookie('userEmail');
			  req.session.destroy(); 
			  return res.redirect('/user/login');
			} else {
			  db.Usuario.update({
				nombre: req.body.fullName,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				estado: req.body.country,
				avatar: req.file.filename
			  },
			  {
				where: { id: idUserUpdate }
			  }) 

			  res.clearCookie('userEmail');
			  req.session.destroy(); 
			  return res.redirect('/user/login');
			}
		  })
		}
	  })
    }
  }
}

module.exports = controller;