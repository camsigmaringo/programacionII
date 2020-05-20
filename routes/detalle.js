var express = require('express');
var router = express.Router();

/* GET Detalle page. */
router.get('/', function(req, res, next) {
  res.render('detalle', { title: 'Detalle de cancion' });
});

module.exports = router;