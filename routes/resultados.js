var express = require('express');
var router = express.Router();

/* GET Resultados page. */
router.get('/', function(req, res, next) {
  res.render('resultados', { title: 'Resultados' });
});

module.exports = router;