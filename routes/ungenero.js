var express = require('express');
var router = express.Router();

/* GET Un Genero page. */
router.get('/', function(req, res, next) {
  res.render('ungenero', { title: 'Detalle de Genero' });
});

module.exports = router;