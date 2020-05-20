var express = require('express');
var router = express.Router();

/* GET Quiz page. */
router.get('/', function(req, res, next) {
  res.render('quiz', { title: 'Quiz' });
});

module.exports = router;