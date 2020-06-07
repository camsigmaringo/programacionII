var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET Quiz page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Registro' });
});

module.exports = router;