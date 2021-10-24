const controller = {
  list: (req, res, next) => {
    res.render('products/list');
  },
  create: (req, res, next) => {
    res.render('products/create');
  },
  details: (req, res, next) => {
    res.render('products/details');
  },
  add: (req, res, next) => {
    console.log(req.body);

    res.redirect('products/list');
  },
  edit: (req, res, next) => {
      
      let idUser = req.params.id;
      console.log(idUser);

      let users = [
        {id: 1, name: 'Dario'},
        {id: 2, name: 'Javier'},
        {id: 3, name: 'Maru'},
        {id: 4, name: 'Ale'},
        {id: 5, name: 'Alan'}
      ];

      let userToEdit = users[idUser]; 

      res.render('products/edit', {userToEdit: userToEdit});
  },
  update: (req, res, next) => {
    console.log(req.body);

    res.redirect('/products');
  },
  delete: (req, res, next) => {
    console.log('DELETE');
    res.redirect('/');
  }
};

module.exports = controller;