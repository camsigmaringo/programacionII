var express = require('express');
var router = express.Router();

/* GET Genero page. */
router.get('/', function(req, res, next) {
  res.render('genero', { title: 'Genero' });
});

module.exports = router;
