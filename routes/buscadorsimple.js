var express = require('express');
var router = express.Router();

/* GET Buscador Simple page. */
router.get('/', function(req, res, next) {
  res.render('Buscador', { title: 'Buscador' });
});

module.exports = router;