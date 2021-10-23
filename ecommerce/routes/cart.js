var express = require('express');
var router = express.Router();

/* GET cart products list page. */
router.get('/list', function(req, res, next) {
  res.render('cart/list', { title: 'Cart' });
});

module.exports = router;