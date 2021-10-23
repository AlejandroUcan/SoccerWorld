var express = require('express');
var router = express.Router();

/* GET products details page. */
router.get('/details', function(req, res, next) {
  res.render('products/details', { title: 'detalles' });
});

module.exports = router;
