var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

/* GET table page. */
router.get('/table', function(req, res, next) {
  res.render('pages/table');
});

module.exports = router;
