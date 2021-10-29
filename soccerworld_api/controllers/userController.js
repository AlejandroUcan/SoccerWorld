const db = require('../database/models');

module.exports = { 
  list: (req, res) => {
    console.log('list');
    db.Usuario
      .findAll()
        .then(users => {
          return res.status(200).json({
            total: users.length,
            data: users,
            status: 200
          })
        })    
  }, 
  details: (req, res) => {
    console.log('details');
    let userId = req.params.id;
    db.Usuario
    .findByPk(userId)
      .then(user => {
        return res.status(200).json({
          nombre: user.nombre,
          email: user.email,
          avatar: 'http://localhost:3000/images/avatars/' + user.avatar,
          status: 200
        })
      })
  },
  last: (req, res) => {
    console.log('Last');
    db.Usuario
      .findAll({
        order: [
          ['id', 'DESC'],
        ],
        limit: 1
      })
      .then(user => {
        return res.status(200).json({
          data: user,
          status: 200
        })
      })
  },  
}