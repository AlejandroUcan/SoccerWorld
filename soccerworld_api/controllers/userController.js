const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = { 
  list: (req, res) => {
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
  details:() => {
    db.Usuario
    .findAll()
      .then(users => {
        return res.status(200).json({
          total: users.length,
          data: users,
          status: 200
        })
      })
  }
}