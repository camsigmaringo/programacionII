var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');
var storage = require('node-sessionstorage');

router.get('/', function(req, res, next) {
    var userId = storage.getItem('userId');
    (userId == undefined) ? res.redirect('/login') : res.render('userprofile', { title: 'Mi perfil' });
});

module.exports = router;