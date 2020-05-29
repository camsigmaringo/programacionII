var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

//login
router.post('/auth', userController.postLogin);

module.exports = router;