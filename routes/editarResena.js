var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('editarResena', { title: 'Editar Reseña' });
});

module.exports = router;