var express = require('express');
var router = express.Router();

/* GET users register page. */
router.get('/register', function(req, res, next) {
  res.render('users/register', { title: 'register' });
});
/* GET users login page. */
router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'login' });
});
/* GET users admin controller. */
router.get('/admin', function(req, res, next) {
  res.render('users/admin', { title: 'login' });
});

module.exports = router;
