var express = require('express');
var router = express.Router();

// var inicioController = require('../controllers/inicioController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Inicio"});
});

module.exports = router;
