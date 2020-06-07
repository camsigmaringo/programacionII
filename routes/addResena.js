var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController')

router.post('/', userController.addResena);

module.exports = router;