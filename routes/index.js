var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nuclear Family' });
});
router.get('/jagdev', function(req, res, next) {
  res.render('jagdev', { title: 'Nuclear Family' });
});
router.get('/param', function(req, res, next) {
  res.render('param', { title: 'Nuclear Family' });
});
router.get('/shanty', function(req, res, next) {
  res.render('shanty', { title: 'Nuclear Family' });
});

module.exports = router;
