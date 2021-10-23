var express = require('express');
var router = express.Router();

/* GET products details page. */
router.get('/details', function(req, res, next) {
  res.render('products/details', { title: 'detalles' });
});

/* GET products upload page. */
router.get('/upload', function(req, res, next) {
  res.render('products/upload', { title: 'detalles' });
});

/* GET products edit page. */
router.get('/edit', function(req, res, next) {
  res.render('products/edit', { title: 'detalles' });
});

module.exports = router;
