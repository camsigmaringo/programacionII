var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', error: '', success: '' });
});

module.exports = router;