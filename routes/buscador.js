var express = require('express');
var router = express.Router();

/* GET buscador page. */
router.get('/', function(req, res, next) {
  res.render('buscador', { title: 'Buscador' });
});

module.exports = router;