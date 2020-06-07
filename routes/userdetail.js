var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/:userid', userController.getUserById);

module.exports = router;
