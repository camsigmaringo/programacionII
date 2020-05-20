var express = require('express');
var router = express.Router();

/* GET Favorito page. */
router.get('/', function(req, res, next) {
  res.render('favoritos', { title: 'Favoritos' });
});

module.exports = router;