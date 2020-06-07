var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

//login
router.post('/', userController.postLogin);

module.exports = router;